class Artist {
    constructor(name) {
        this.name = name;
        this.albums = this.getAlbums();
    }

    static getAllArtists() {
        return Object.keys(Artist.data);
    }

    static findName(name) {
        if (!name || name.trim() === '') return null;

        const artistData = Artist.data[name];
        if (artistData) {
            return new Artist(name);
        } else {
            return null;
        }
    }

    getName() {
        return this.name;
    }

    getAlbums() {
        return Artist.data[this.name] || [];
    }
}

// Mock data
Artist.data = {
    "The Beatles": ["Abbey Road", "Sgt. Pepper's Lonely Hearts Club Band", "Revolver"],
    "Pink Floyd": ["The Dark Side of the Moon", "Wish You Were Here", "Animals"],
    "Led Zeppelin": ["Led Zeppelin IV", "Physical Graffiti", "Houses of the Holy"],
    "Queen": ["A Night at the Opera", "News of the World", "The Game"],
    "Nirvana": ["Nevermind", "In Utero", "Bleach"],
};

module.exports = Artist;
