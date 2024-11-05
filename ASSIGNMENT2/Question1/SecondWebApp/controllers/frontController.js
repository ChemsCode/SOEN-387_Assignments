const path = require('path');

exports.handleRequest = (req, res) => {
    const commandName = req.query.command || 'Home';
    const CommandClass = getCommandClass(commandName);
    const commandInstance = new CommandClass(req, res);
    commandInstance.execute();
};

function getCommandClass(commandName) {
    try {
        const commandPath = path.join(__dirname, 'commands', `${commandName}Command.js`);
        const CommandClass = require(commandPath);
        return CommandClass;
    } catch (error) {
        // Log the error for debugging purposes
        console.error(`Error loading command '${commandName}':`, error.message);

        // If the command class is not found, return the UnknownCommand
        const UnknownCommand = require('./commands/UnknownCommand');
        return UnknownCommand;
    }
}