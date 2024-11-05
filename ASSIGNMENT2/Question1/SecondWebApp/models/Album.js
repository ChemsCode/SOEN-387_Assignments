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

    getInfo() {
        return this.data.info || 'No information available.';
    }
}

// Mock data
Album.data = {
    // The Beatles Albums
    "Abbey Road": {
        artist: "The Beatles",
        year: 1969,
        info: "Abbey Road is the eleventh studio album by the English rock band The Beatles."
    },
    "Sgt. Pepper's Lonely Hearts Club Band": {
        artist: "The Beatles",
        year: 1967,
        info: "Sgt. Pepper's Lonely Hearts Club Band is the eighth studio album by The Beatles."
    },
    "Revolver": {
        artist: "The Beatles",
        year: 1966,
        info: "Revolver is the seventh studio album by The Beatles, marking a significant evolution in their sound."
    },
    // Pink Floyd Albums
    "The Dark Side of the Moon": {
        artist: "Pink Floyd",
        year: 1973,
        info: "The Dark Side of the Moon is Pink Floyd's eighth studio album, known for its groundbreaking sound."
    },
    "Wish You Were Here": {
        artist: "Pink Floyd",
        year: 1975,
        info: "Wish You Were Here is Pink Floyd's ninth studio album, a tribute to founding member Syd Barrett."
    },
    "Animals": {
        artist: "Pink Floyd",
        year: 1977,
        info: "Animals is the tenth studio album by Pink Floyd, critiquing the socio-political landscape of the 1970s."
    },
    // Led Zeppelin Albums
    "Led Zeppelin IV": {
        artist: "Led Zeppelin",
        year: 1971,
        info: "Led Zeppelin IV is the fourth studio album by Led Zeppelin, featuring the iconic song 'Stairway to Heaven'."
    },
    "Physical Graffiti": {
        artist: "Led Zeppelin",
        year: 1975,
        info: "Physical Graffiti is the sixth studio album by Led Zeppelin, known for its eclectic style and ambitious scope."
    },
    "Houses of the Holy": {
        artist: "Led Zeppelin",
        year: 1973,
        info: "Houses of the Holy is the fifth studio album by Led Zeppelin, incorporating various musical influences."
    },
    // Queen Albums
    "A Night at the Opera": {
        artist: "Queen",
        year: 1975,
        info: "A Night at the Opera is Queen's fourth studio album, featuring the legendary 'Bohemian Rhapsody'."
    },
    "News of the World": {
        artist: "Queen",
        year: 1977,
        info: "News of the World is Queen's sixth studio album, known for hits like 'We Will Rock You' and 'We Are the Champions'."
    },
    "The Game": {
        artist: "Queen",
        year: 1980,
        info: "The Game is Queen's eighth studio album, featuring a blend of rock and pop influences."
    },
    // Nirvana Albums
    "Nevermind": {
        artist: "Nirvana",
        year: 1991,
        info: "Nevermind is Nirvana's second studio album, credited with bringing grunge to mainstream audiences."
    },
    "In Utero": {
        artist: "Nirvana",
        year: 1993,
        info: "In Utero is the third and final studio album by Nirvana, known for its raw sound and emotional themes."
    },
    "Bleach": {
        artist: "Nirvana",
        year: 1989,
        info: "Bleach is the debut studio album by Nirvana, showcasing their early grunge style."
    },
};

module.exports = Album;
