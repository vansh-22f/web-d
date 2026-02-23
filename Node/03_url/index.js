//url
//https://www.google.com/about?name=abc&age=23
//      https://   ->>protocol
//      www.google.com    ->>host/domain
//      /about  -->is the path
//      ?name=abc&age=23  -->query parameters

const http = require("http");

const fs = require("fs");
const url=require("url");
const myserver = http.createServer((req, res) => {
  const log = `${Date.now()}:${req.url}New Req Recived\n`;
  const myurl=url.parse(req.url,true);
    console.log(myurl);
    console.log(myurl.pathname);
    console.log(myurl.query);
  // console.log(req.headers)
  // console.log("New Req received")
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myurl.pathname) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        const username=myurl.query.name;
        res.end(`About Page for ${username}`);
        break;
        case "/search":
            const search=myurl.query.search_query;
            res.end(`Search result for ${search}`);
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
