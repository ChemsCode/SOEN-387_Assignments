const ColorConsole = require('./ColorConsole');
const colors = require('./colors');

class BlueConsole extends ColorConsole {
    log(message) {
        console.log(`${colors.FgBlue}%s${colors.Reset}`, message);
    }
}

module.exports = BlueConsole;