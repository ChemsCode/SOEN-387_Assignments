class LoggingStrategy {
    log(level, message) {
        throw new Error('log() method must be implemented');
    }
}

module.exports = LoggingStrategy;