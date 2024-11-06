class Logger {
    log(level, message) {
        const timestamp = this.getTimestamp();
        const formattedMessage = this.formatMessage(level, timestamp, message);
        this.write(formattedMessage);
    }

    debug(message) {
        this.log('DEBUG', message);
    }

    info(message) {
        this.log('INFO', message);
    }

    warn(message) {
        this.log('WARN', message);
    }

    error(message) {
        this.log('ERROR', message);
    }

    getTimestamp() {
        return new Date().toISOString();
    }

    formatMessage(level, timestamp, message) {
        return `${timestamp} [${level}]: ${message}`;
    }

    write(formattedMessage) {
        throw new Error('The write() method must be implemented by subclasses');
    }
}

module.exports = Logger;
