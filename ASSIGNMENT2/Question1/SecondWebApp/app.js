const express = require('express');
const path = require('path');
const frontController = require('./controllers/frontController');

const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route all requests to the front controller
app.get('/', frontController.handleRequest);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});