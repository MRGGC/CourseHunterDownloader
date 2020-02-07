const express = require('express');
const downloaderController = require('./controllers/downloader');
const APP_PORT = 8080;

const app = express();

downloaderController(app);

app.listen(APP_PORT, () => {
    console.log(`Server is running on port ${APP_PORT}...`);
});