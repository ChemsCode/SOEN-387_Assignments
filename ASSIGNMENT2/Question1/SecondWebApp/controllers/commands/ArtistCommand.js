const Command = require('./Command');
const Artist = require('../../models/Artist');
const ArtistHelper = require('../../helpers/ArtistHelper');

class ArtistCommand extends Command {
    execute() {
        const name = this.req.query.name;
        const artist = Artist.findName(name);

        if (!artist) {
            this.res.render('missingData', { message: 'Artist Not Found' });
        } else {
            this.res.render('artistView', { helper: new ArtistHelper(artist) });
        }
    }
}

module.exports = ArtistCommand;