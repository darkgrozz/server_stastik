var fs = require("fs");

fs.open("filebarudong.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Tersimpan");
});

//content will write to the file
let content = "hallo";

//write content to file
fs.writeFile(file, content, (err) => {
  if (err) throw err;
  console.log("tersimpan y");
});

//read file
fs.readFile(file, (err, data) => {
  if (err) throw err;
  console.log(data.toString("utf8"));
});
