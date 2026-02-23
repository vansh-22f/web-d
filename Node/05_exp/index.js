const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express=require("express");

const app=express();

app.get('/',(req,res)=>{
    return res.send("Hello from  Homepage");
});

app.get('/about',(req,res)=>{
    res.end("Hello from about page"+' hey '+req.query.name+ ' you are '+req.query.age)
});


app.listen(8000,()=>{
    console.log("server started")
})

// const myserver=http.createServer(app);
// myserver.listen(8000, () => {
//   console.log("server Started");
// });




// function myHandler(req,res){

// }
// const myserver = http.createServer((req, res) => {
//   const log = `${Date.now()}:${req.method}   ${req.url}New Req Recived\n`;
//   const myurl = url.parse(req.url, true);

//   console.log(myurl);
//   console.log(myurl.pathname);
//   console.log(myurl.query);

//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myurl.pathname) {
//       case "/":
//         if (req.method === "GET") res.end("HomePage");
//         break;
//       case "/about":
//         const username = myurl.query.name;
//         res.end(`About Page for ${username}`);
//         break;
//       case "/signup":
//         if (req.method === "GET") res.end("This is a signup form");
//         else if (req.method === "POST") {
//           // db query
//           res.end("Success");
//         }
//         break;
//       case "/search":
//         const search = myurl.query.search_query;
//         res.end(`Search result for ${search}`);
//         break;
//       default:
//         res.end("Page Not Found");
//     }
//   });
// });
