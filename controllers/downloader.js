function DownloadController(req, res) {
    res.end('oof');
}

function initApp(app) {
    app.post('/api/download/:url', DownloadController);
}

module.exports = initApp;