import http from 'http';
// create a server
const server = http.createServer((req,res)=>{
    // console.log(req);
    // res.setHeader('content-type','text/html')
    // res.statusCode = 404
    // res.statusMessage= '<h1>Page not found</h1>'
    // res.write('<h1>Hello from Node JS</h1>')

    // short hand for status(code,message and header)
    res.writeHead(200,"Good",{"content-type":"text/html"})
})
// listening a server
server.listen(8080,()=>{
    console.log('Server Up!')
})