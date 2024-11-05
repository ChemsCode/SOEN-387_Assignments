class ArtistHelper {
    constructor(artist) {
        this.artist = artist;
    }

    getName() {
        return this.artist.getName();
    }

    getInfo() {
        return this.artist.getInfo();
    }

    getAlbums() {
        return this.artist.getAlbums();
    }
}

module.exports = ArtistHelper;