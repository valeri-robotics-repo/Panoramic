fs = require('fs');
http = require('http');
url = require('url');


http.createServer(function(req, res){
  var request = url.parse(req.url, true);
  var action = request.pathname;

  if (action == '/frame.jpg') {
     var img = fs.readFileSync('./frame.jpg');
     res.writeHead(200, {'Content-Type': 'image/gif' });
     res.end(img, 'binary');
  } 
  else if (action== '/index.html'){
    var img = fs.readFileSync('./index.html');
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(img);
  }
  else{
    var img = fs.readFileSync('./libraries/panolens.min.js');
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(img);



  }
}).listen(8080, '127.0.0.1');