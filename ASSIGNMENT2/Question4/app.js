const Logger = require('./logger');
const ConsoleStrategy = require('./strategies/ConsoleStrategy');
const FileStrategy = require('./strategies/FileStrategy');

// Create a logger with ConsoleStrategy
const logger = new Logger(new ConsoleStrategy());

logger.debug('This is a debug message.');
logger.info('This is an info message.');
logger.warn('This is a warning message.');
logger.error('This is an error message.');

// Change strategy to FileStrategy
const fileStrategy = new FileStrategy('app.log');
logger.setStrategy(fileStrategy);

logger.debug('This debug message will be written to the file.');
logger.info('This info message will be written to the file.');
logger.warn('This warning message will be written to the file.');
logger.error('This error message will be written to the file.');

// Change back to ConsoleStrategy
logger.setStrategy(new ConsoleStrategy());

logger.info('Logging back to the console.');