const ColorConsole = require('./ColorConsole');
const colors = require('./colors');

class RedConsole extends ColorConsole {
    log(message) {
        console.log(`${colors.FgRed}%s${colors.Reset}`, message);
    }
}

module.exports = RedConsole;