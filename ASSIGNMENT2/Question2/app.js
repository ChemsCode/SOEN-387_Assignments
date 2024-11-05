const readline = require('readline');
const consoleFactory = require('./consoleFactory');

// Set up readline for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter a color (red, blue, green): ', (color) => {
    rl.question('Enter a message to log: ', (message) => {
        try {
            const colorConsole = consoleFactory(color);
            colorConsole.log(message);
        } catch (error) {
            console.error(error.message);
        }
        rl.close();
    });
});
