const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.write('OK');
    res.end();
  } else {
    res.write('Hello DevOps 🚀');
    res.end();
  }
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
