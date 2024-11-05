const Command = require('./Command');
const Artist = require('../../models/Artist');

class HomeCommand extends Command {
    execute() {
        const allArtists = Artist.getAllArtists();
        const artistAlbums = {};
        allArtists.forEach(artistName => {
            const artist = Artist.findName(artistName);
            artistAlbums[artistName] = artist.getAlbums();
        });
        this.res.render('home', { artists: allArtists, artistAlbums });
    }
}

module.exports = HomeCommand;