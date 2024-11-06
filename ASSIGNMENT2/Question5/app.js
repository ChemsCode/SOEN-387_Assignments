const ConsoleLogger = require('./consoleLogger');
const FileLogger = require('./fileLogger');

// Console Logger
const consoleLogger = new ConsoleLogger();

consoleLogger.debug('Console logger - debug message');
consoleLogger.info('Console logger - info message');
consoleLogger.warn('Console logger - warning message');
consoleLogger.error('Console logger - error message');

// File Logger
const fileLogger = new FileLogger('app.log');

fileLogger.debug('File logger - debug message');
fileLogger.info('File logger - info message');
fileLogger.warn('File logger - warning message');
fileLogger.error('File logger - error message');
