import http from 'http'
import * as fs from 'fs'
const server = await http.createServer((req,res) => {
if(req.url === "/"){
    // res.end("<h1>Hello from JS</h1>");
    res.writeHead(200,"OK",{"content-type":"text/html"});
    fs.readFile("public/home.html",(error,data)=>{
        if (error) throw error;
        res.end(data);
    })
}
})

server.listen(8080,()=>{
    console.log('Server Up')
})