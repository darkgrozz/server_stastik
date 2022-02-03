var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/pdf" });
    res.write("<b>Muhammad RIZKY Putra Pratama</b>!");
    res.end();
  })
  .listen(8000);

console.log("server running on http://localhost:8000");
