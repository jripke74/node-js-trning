const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/jeff') {
    res.write('<head><title>Enter a Message</title></head>');
    res.write('<h1>Hello There Jeff!!!</h1>');
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>');
    return res.end();
  } else if (url === '/message') {
    res.write('<h1>Message Sent!!!');
    return res.end();
  }
  res.write('<a href="/jeff">Send a message</a>');
});

server.listen(3000);
