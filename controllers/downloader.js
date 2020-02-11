var { exec } = require("child_process");

function DownloadController(req, res) {
    exec("curl -L https://coursehunter.net/course/node-js-polnoe-rukovodstvo-po-sozdaniyu-restful-api", function(error, stdout, stderr){
      if (error){
        console.error(`exec error: ${error}`);
        return;
      }
    console.log(stdout);
    var n = stdout.search(`<video class="jw-video jw-reset" tabindex="-1" disableremoteplayback="" webkit-playsinline="" playsinline="" preload="metadata" src="`);
    console.log(n);
    var str = "";
    var index = 141;
    for (var i = 0; i < 70; i++){
      str += stdout[n + index + i];
    }
    console.log(str)
    /*
    exec("curl -O https://link", function(error, stdout, stderr){

  })
    */
    //console.log(`stdout: ${stdout}`);
    })
    res.end('oof');
}

function initApp(app) {
    app.post('/api/download/:url', DownloadController);
}

module.exports = initApp;
