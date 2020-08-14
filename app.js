const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/jeff') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<form method="POST" action="/message"><input type="text" name="message"><button type="submit">Submit</button></form>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      // const message = parseBody.split('=')[1];
      fs.writeFileSync('message.txt', parseBody);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<a href="/jeff">Send Message</a>');
  res.end();
});

server.listen(3000);
