const Logger = require('./logger');

class ConsoleLogger extends Logger {
    write(formattedMessage) {
        console.log(formattedMessage);
    }
}

module.exports = ConsoleLogger;
