const consoleProxy = new Proxy(console, {
    get(target, prop) {
        if (['log', 'error', 'debug', 'info'].includes(prop)) {
            return function (...args) {
                const timestamp = new Date().toISOString();
                target[prop](`${timestamp} ${args.join(' ')}`);
            };
        } else {
            return target[prop];
        }
    }
});

// Test the consoleProxy
consoleProxy.log('Hello World!');
consoleProxy.error('An Error Occurred');
consoleProxy.info('This is an Info log');
consoleProxy.debug('Debugging...');
