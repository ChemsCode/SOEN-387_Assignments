const LoggingStrategy = require('./LoggingStrategy');

class ConsoleStrategy extends LoggingStrategy {
    log(level, message) {
        const timestamp = new Date().toISOString();
        switch (level) {
            case 'debug':
                console.debug(`${timestamp} [DEBUG]: ${message}`);
                break;
            case 'info':
                console.info(`${timestamp} [INFO]: ${message}`);
                break;
            case 'warn':
                console.warn(`${timestamp} [WARN]: ${message}`);
                break;
            case 'error':
                console.error(`${timestamp} [ERROR]: ${message}`);
                break;
            default:
                console.log(`${timestamp} [LOG]: ${message}`);
        }
    }
}

module.exports = ConsoleStrategy;