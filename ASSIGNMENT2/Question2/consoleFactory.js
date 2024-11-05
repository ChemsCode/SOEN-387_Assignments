const RedConsole = require('./RedConsole');
const GreenConsole = require('./GreenConsole');
const BlueConsole = require('./BlueConsole');

function consoleFactory(color) {
    switch (color.toLowerCase()) {
        case 'red':
            return new RedConsole();
        case 'green':
            return new GreenConsole();
        case 'blue':
            return new BlueConsole();
        default:
            throw new Error(`Color "${color}" is not supported.`);
    }
}

module.exports = consoleFactory;