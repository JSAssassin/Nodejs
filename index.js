const http = require('http');

const server = http.createServer(function(req, res){
  console.log('req was made:', req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello assassins')
})


server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
