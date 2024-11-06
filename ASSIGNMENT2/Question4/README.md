# Logging with Strategy Pattern

This project demonstrates a logging component with multiple log levels (`debug`, `info`, `warn`, and `error`). It uses the Strategy pattern to direct log outputs to different destinations, such as the console or a file.


## Setup Instructions

1. Navigate to the directory.
```
   cd Question4
```

2. Run the Application. 
```
   node app.js

```


## Usage 
Example Usage 
```
   $ node app.js
   2024-11-06T03:04:49.776Z [DEBUG]: This is a debug message.
   2024-11-06T03:04:49.786Z [INFO]: This is an info message.
   2024-11-06T03:04:49.787Z [WARN]: This is a warning message.
   2024-11-06T03:04:49.788Z [ERROR]: This is an error message.
   2024-11-06T03:04:49.789Z [INFO]: Logging back to the console.
```