// models/Album.js

class Album {
    constructor(title) {
        this.title = title || 'Default Title';
        this.data = Album.data[title];
    }

    static findTitle(title) {
        if (!title || title.trim() === '') return null;

        const albumData = Album.data[title];
        if (albumData) {
            return new Album(title);
        } else {
            return null;
        }
    }

    getTitle() {
        return this.title;
    }

    getArtist() {
        return this.data.artist;
    }

    getYear() {
        return this.data.year;
    }
}

Album.data = {
    // The Beatles Albums
    "Abbey Road": {
        artist: "The Beatles",
        year: 1969,
    },
    "Sgt. Pepper's Lonely Hearts Club Band": {
        artist: "The Beatles",
        year: 1967,
    },
    "Revolver": {
        artist: "The Beatles",
        year: 1966,
    },
    // Pink Floyd Albums
    "The Dark Side of the Moon": {
        artist: "Pink Floyd",
        year: 1973,
    },
    "Wish You Were Here": {
        artist: "Pink Floyd",
        year: 1975,
    },
    "Animals": {
        artist: "Pink Floyd",
        year: 1977,
    },
    // Led Zeppelin Albums
    "Led Zeppelin IV": {
        artist: "Led Zeppelin",
        year: 1971,
    },
    "Physical Graffiti": {
        artist: "Led Zeppelin",
        year: 1975,
    },
    "Houses of the Holy": {
        artist: "Led Zeppelin",
        year: 1973,
    },
    // Queen Albums
    "A Night at the Opera": {
        artist: "Queen",
        year: 1975,
    },
    "News of the World": {
        artist: "Queen",
        year: 1977,
    },
    "The Game": {
        artist: "Queen",
        year: 1980,
    },
    // Nirvana Albums
    "Nevermind": {
        artist: "Nirvana",
        year: 1991,
    },
    "In Utero": {
        artist: "Nirvana",
        year: 1993,
    },
    "Bleach": {
        artist: "Nirvana",
        year: 1989,
    },
};

module.exports = Album;
