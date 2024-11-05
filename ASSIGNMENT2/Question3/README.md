# Timestamped Logs - Console Proxy

This project creates a proxy for the `console` object that prepends a timestamp to each logging method (`log`, `error`, `debug`, `info`).

## Setup Instructions

1. Navigate to the directory.
```
   cd Question3
```

2. Run the Application. 
```
   node consoleProxy.js

```


## Usage 
Example Usage 
```
   $ node consoleProxy.js 
   2024-11-05T21:52:42.746Z Hello World!
   2024-11-05T21:52:42.758Z An Error Occurred
   2024-11-05T21:52:42.759Z This is an Info log
   2024-11-05T21:52:42.759Z Debugging...
```