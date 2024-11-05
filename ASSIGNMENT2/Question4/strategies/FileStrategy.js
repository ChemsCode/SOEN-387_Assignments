const LoggingStrategy = require('./LoggingStrategy');
const fs = require('fs');
const path = require('path');

class FileStrategy extends LoggingStrategy {
    constructor(filePath) {
        super();
        this.filePath = filePath || path.join(__dirname, 'logs.txt');
    }

    log(level, message) {
        const timestamp = new Date().toISOString();
        const logMessage = `${timestamp} [${level.toUpperCase()}]: ${message}\n`;
        fs.appendFile(this.filePath, logMessage, (err) => {
            if (err) {
                console.error('Failed to write log to file:', err);
            }
        });
    }
}

module.exports = FileStrategy;