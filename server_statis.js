var fs = require("fs");
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      " <center><a href=/home> Home </a> <a href=/about> about </a> <a href=/profile> profil</a></center>"
    );

    var url = req.url;

    if (url === "/") {
      res.write(" This is main page");
      res.end();
    } else if (url === "/home") {
      fs.readFile("index.html", (err, data) => {
        if (err) throw err;

        //send respon
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      });
      res.write(" home");
      res.end();
    } else if (url === "/about") {
      fs.readFile("a_about.html", (err, data) => {
        if (err) throw err;

        //send respon
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      });
      res.write(" about");
      res.end();
    } else if (url === "/profil") {
      fs.readFile("a_profil.html", (err, data) => {
        if (err) throw err;

        //send respon
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      });
      res.write(" profil");
      res.end();
    } else {
      res.write("Hello Madda!");
      res.end();
    }
  })
  .listen(1000, function () {
    console.log("server start at port http://localhost:1000");
  });
