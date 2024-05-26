const http = require("http");
const port = process.env.PORT || 8080;

http
  .createServer((req, res) => {
    res.write("I'm Alive");
    res.end();
  })
  .listen(port);
