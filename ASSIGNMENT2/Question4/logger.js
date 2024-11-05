class Logger {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    debug(message) {
        this.strategy.log('debug', message);
    }

    info(message) {
        this.strategy.log('info', message);
    }

    warn(message) {
        this.strategy.log('warn', message);
    }

    error(message) {
        this.strategy.log('error', message);
    }
}

module.exports = Logger;