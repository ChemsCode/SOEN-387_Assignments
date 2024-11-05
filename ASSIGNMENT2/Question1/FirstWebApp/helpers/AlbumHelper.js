class AlbumHelper {
    constructor(album) {
        this.album = album;
    }

    getTitle() {
        return this.album.getTitle();
    }

    getArtist() {
        return this.album.getArtist();
    }

    getYear() {
        return this.album.getYear();
    }

    getInfo() {
        return `${this.getTitle()} is an album by ${this.getArtist()}, released in ${this.getYear()}.`;
    }
}

module.exports = AlbumHelper;