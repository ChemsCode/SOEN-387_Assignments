const consoleFactory = require('./consoleFactory');

// Test messages
const messages = [
    { color: 'red', text: 'This is a red message.' },
    { color: 'green', text: 'This is a green message.' },
    { color: 'blue', text: 'This is a blue message.' },
];

// Loop through messages and use the factory to log them
messages.forEach(({ color, text }) => {
    try {
        const colorConsole = consoleFactory(color);
        colorConsole.log(text);
    } catch (error) {
        console.error(error.message);
    }
});

// Test with an unsupported color
try {
    const unknownConsole = consoleFactory('purple');
    unknownConsole.log('This message should not appear.');
} catch (error) {
    console.error(error.message);
}