const Command = require('./Command');
const Album = require('../../models/Album');
const AlbumHelper = require('../../helpers/AlbumHelper');

class AlbumCommand extends Command {
    execute() {
        const title = this.req.query.title;
        const album = Album.findTitle(title);

        if (!album) {
            this.res.render('missingData', { message: 'Album Not Found' });
        } else {
            this.res.render('albumView', { helper: new AlbumHelper(album) });
        }
    }
}

module.exports = AlbumCommand;