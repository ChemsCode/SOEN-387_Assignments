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

    getAlbumListHTML() {
        let result = "<ul>";
        for (let album of this.getAlbums()) {
            result += "<li>" + album + "</li>";
        }
        result += "</ul>";
        return result;
    }
}

module.exports = ArtistHelper;
