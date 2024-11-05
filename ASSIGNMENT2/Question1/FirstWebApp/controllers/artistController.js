const Artist = require('../models/Artist');
const ArtistHelper = require('../helpers/ArtistHelper');

exports.getArtist = (req, res) => {
    const name = req.query.name;
    const artist = Artist.findName(name);

    if (!artist) {
        res.render('missingData', { message: 'Artist Not Found' });
    } else {
        res.render('artistView', { helper: new ArtistHelper(artist) });
    }
};

exports.getHomePage = (req, res) => {
    const allArtists = Artist.getAllArtists();
    const artistAlbums = {};
    allArtists.forEach(artistName => {
        const artist = Artist.findName(artistName);
        artistAlbums[artistName] = artist.getAlbums();
    });
    res.render('home', { artists: allArtists, artistAlbums });
};