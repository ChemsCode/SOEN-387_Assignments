const Logger = require('./logger');
const fs = require('fs');
const path = require('path');

class FileLogger extends Logger {
    constructor(filePath) {
        super();
        this.filePath = filePath || path.join(__dirname, 'logs.txt');
    }

    write(formattedMessage) {
        fs.appendFile(this.filePath, formattedMessage + '\n', (err) => {
            if (err) {
                console.error('Failed to write log to file:', err);
            }
        });
    }
}

module.exports = FileLogger;