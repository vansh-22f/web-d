const http = require("http");

const fs = require("fs");

const myserver = http.createServer((req, res) => {
  const log = `${Date.now()}:${req.url}New Req Recived\n`;

  // console.log(req.headers)
  // console.log("New Req received")
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("About Page");
        break;
      default:
        res.end("Page Not Found");
    }

    // res.end("Hello from server")

    // this will send response to client and end the connection.
  });
});

myserver.listen(8000, () => {
  console.log("server Started");
});
