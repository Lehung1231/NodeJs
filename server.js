const http = require("http");
const port = 8080;
http.createServer((req,res) =>{
    console.log("url",req.url);
    console.log("method",req.method);
    if(req.url === "/"){
        res.end(`<h1>HOME</h1>`);
    }
}).listen(port, () =>{
      console.log(`ok ${port}`);
});