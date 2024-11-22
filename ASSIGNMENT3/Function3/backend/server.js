// backend/server.js

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const db = new sqlite3.Database('musicians.db');

app.use(cors());
app.use(express.json());

// API endpoint to search for a musician by name
app.get('/api/musicians', (req, res) => {
  const name = req.query.name;
  const sql = `SELECT * FROM Musician WHERE name = ?`;

  db.get(sql, [name], (err, musician) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (musician) {
      // Get albums for the musician
      const albumSql = `SELECT * FROM Album WHERE musician_id = ?`;
      db.all(albumSql, [musician.id], (err, albums) => {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        res.json({ ...musician, albums });
      });
    } else {
      res.json({});
    }
  });
});

// API endpoint to get tracks by album ID
app.get('/api/albums/:id/tracks', (req, res) => {
  const albumId = req.params.id;
  const sql = `SELECT * FROM Track WHERE album_id = ? ORDER BY track_number`;

  db.all(sql, [albumId], (err, tracks) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ tracks });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
