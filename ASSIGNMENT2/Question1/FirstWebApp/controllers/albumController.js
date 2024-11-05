const Album = require('../models/Album');
const AlbumHelper = require('../helpers/AlbumHelper');

exports.getAlbum = (req, res) => {
    const title = req.query.title;
    const album = Album.findTitle(title);

    if (!album) {
        res.render('missingData', { message: 'Album Not Found' });
    } else {
        res.render('albumView', { helper: new AlbumHelper(album) });
    }
};