const http = require('http');
const bodyParser = require('body-parser');

const server = http.createServer((req, res) => {
  // Use body-parser to handle large requests
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    //Here you can access the body
    console.log(body);
    res.writeHead(200);
    res.end('OK');
  });
});

server.listen(3000); 
//Note:Remember to install body-parser using 'npm install body-parser' 