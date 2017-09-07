var server = require('webserver').create();

function getPage(url, callback) {
    console.log(url);
    var page = require('webpage').create();
    page.open(url, function() {
       setTimeout(function() {
           page.evaluate(function () {
               NodeList.prototype.forEach = Array.prototype.forEach;
               document.querySelectorAll('meta[name=fragment], script').forEach(function(el) {
                   el.parentNode.removeChild(el);
               });
           });

           callback(page.content);
           console.log('PAGE LOADED');
           page.close();
       }, 300);
    });
}

server.listen(8888, function(req, res) {

    res.headers = {'Content-Type': 'text/html'};

    var regexp = /_escaped_fragment_=(.*)$/;
    var fragment = decodeURIComponent(req.url.match(regexp)[1]);
    var url = 'http://example-static.com/' + fragment;

    getPage(url, function(content) {
        res.statusCode = 200;
        res.write(content);
        res.close();
    })

});
