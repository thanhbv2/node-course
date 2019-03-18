
var http = require('http');
var url = require('url');
var fs = require('fs');

const server = http.createServer((request, response) => {
  const pathName = url.parse(request.url).pathname;
  console.log('===============>', pathName);
  response.writeHead(200)
  if (pathName === '/') {
    response.write(`
    <h1>Hello word</h1>
    <h1>Hello Home page</h1>
  `)
  } else if (pathName === '/product') {
    response.write(`
    <h1>Product page</h1>
  `)
  } else {
    response.write(`
    <h1>404 not found</h1>
  `)
  }
  response.end()
})


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log('===============>server listen port: ', PORT))