var url = require("url");
var adr = "https://langensari.com/search.php?sayur=wortel&Daging=sapi";
var q = url.parse(adr, true);

//hasil parse URL
console.log("protocol: " + q.protocol);
console.log("hostname: " + q.host);
console.log("pathname: " + q.pathname);
console.log("params: " + q.search);

var qdata = q.quary;
console.log(qdata);
