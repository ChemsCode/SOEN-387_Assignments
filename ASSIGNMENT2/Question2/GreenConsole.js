const ColorConsole = require('./ColorConsole');
const colors = require('./colors');

class GreenConsole extends ColorConsole {
    log(message) {
        console.log(`${colors.FgGreen}%s${colors.Reset}`, message);
    }
}

module.exports = GreenConsole;