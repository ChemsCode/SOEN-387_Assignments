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
        return this.album.getInfo();
    }
}

module.exports = AlbumHelper;