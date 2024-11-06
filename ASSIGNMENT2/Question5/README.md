# Logging with Strategy Pattern

This project demonstrates a logging component with multiple log levels (`debug`, `info`, `warn`, and `error`). It uses the Strategy pattern to direct log outputs to different destinations, such as the console or a file.


## Setup Instructions

1. Navigate to the directory.
```
   cd Question5
```

2. Run the Application. 
```
   node app.js

```


## Usage 
Example Usage 
```
   $ node app.js
   2024-11-06T03:10:14.220Z [DEBUG]: Console logger - debug message
   2024-11-06T03:10:14.231Z [INFO]: Console logger - info message
   2024-11-06T03:10:14.231Z [WARN]: Console logger - warning message
   2024-11-06T03:10:14.232Z [ERROR]: Console logger - error message
```