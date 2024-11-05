const Command = require('./Command');

class UnknownCommand extends Command {
    execute() {
        this.res.render('missingData', { message: 'Unknown Command' });
    }
}

module.exports = UnknownCommand;
