//1
var http = require("http");
//2
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    switch (req.url) {
      //3
      case "/":
        res.write("URL: " + "<h1>Awal</h1>");
        break;
      case "/home":
        res.write("URL: " + "<h1>home</h1>");
        break;
      case "/profil":
        res.write("URL: " + "<h1>profil</h1>");
        break;
      case "/about":
        res.write("URL: " + "<h1>about</h1>");
        break;
      default:
        res.write("URL: " + "<h1>error</h1>");
        break;
    }
    res.end();
  })
  .listen(8000);
console.log("server running on http://localhost:8000");
//routing if else

var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url === "/") {
      res.write("<h1>Beranda</h1>");
    }
    if (req.url === "/home") {
      res.write("<h1>Home</h1>");
    }
    if (req.url === "/profil") {
      res.write("<h1>Profil</h1>");
    }
    if (req.url === "/about") {
      res.write("<h1>About</h1>");
    }
    res.end();
  })
  .listen(8500);
console.log("server running on http://localhost:8500");
