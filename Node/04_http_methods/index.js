// 1. GET
// when you want to get some data from server

// 2.POST->
//  when you want to send and mutate some data in server

// 3.PUT
// changing all the fields ie all the fields are new.

// 4.PATCH
//changing some fields and not whole

// 5.DELETE
// when want to delete data from db

const http = require("http");

const fs = require("fs");

const myserver = http.createServer((req, res) => {
  const log = `${Date.now()}:${req.method}   ${req.url}New Req Recived\n`;

  // console.log(req.headers)
  // console.log("New Req received")
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        if(req.method==="GET") res.end("HomePage");
        break;
      case "/about":
        res.end("About Page");
        break;
        case '/signup':
            if(res.method==="GET") res.end("This is a signup form");
            else if(req.method==="POST"){
                // db query
                res.end("Sucess");
            }
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
