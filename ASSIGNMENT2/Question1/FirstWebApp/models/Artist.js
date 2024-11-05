class Artist {
    constructor(name) {
        this.name = name;
        this.info = this.getInfo();
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

    getInfo() {
        return Artist.data[this.name]?.info || 'No information available.';
    }

    getAlbums() {
        return Artist.data[this.name]?.albums || [];
    }
}


Artist.data = {
    "The Beatles": {
        info: "The Beatles were an English rock band formed in Liverpool in 1960. They are regarded as the most influential band of all time.",
        albums: ["Abbey Road", "Sgt. Pepper's Lonely Hearts Club Band", "Revolver"]
    },
    "Pink Floyd": {
        info: "Pink Floyd were an English rock band formed in London in 1965. They achieved international acclaim with their progressive and psychedelic music.",
        albums: ["The Dark Side of the Moon", "Wish You Were Here", "Animals"]
    },
    "Led Zeppelin": {
        info: "Led Zeppelin were an English rock band formed in London in 1968. They are considered one of the most successful, innovative, and influential rock groups in history.",
        albums: ["Led Zeppelin IV", "Physical Graffiti", "Houses of the Holy"]
    },
    "Queen": {
        info: "Queen are a British rock band formed in London in 1970. They are known for their diverse musical styles and dynamic live performances.",
        albums: ["A Night at the Opera", "News of the World", "The Game"]
    },
    "Nirvana": {
        info: "Nirvana was an American rock band formed in Aberdeen, Washington, in 1987. They were instrumental in popularizing alternative rock.",
        albums: ["Nevermind", "In Utero", "Bleach"]
    },
};

module.exports = Artist;
