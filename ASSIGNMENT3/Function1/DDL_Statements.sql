CREATE TABLE Musician (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    genre VARCHAR(50),
    country VARCHAR(50),
    debut_year YEAR
);

CREATE TABLE Album (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    musician_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    release_year YEAR,
    genre VARCHAR(50),
    FOREIGN KEY (musician_id) REFERENCES Musician(id)
);

CREATE TABLE Track (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    album_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    duration TIME,
    track_number INT,
    FOREIGN KEY (album_id) REFERENCES Album(id)
);
