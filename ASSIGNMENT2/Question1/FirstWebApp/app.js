const express = require('express');
const path = require('path');
const artistController = require('./controllers/artistController');
const albumController = require('./controllers/albumController');

const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route for the homepage
app.get('/', artistController.getHomePage);

// Route for the artist page
app.get('/artist', artistController.getArtist);

// Route for the album page
app.get('/album', albumController.getAlbum);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});