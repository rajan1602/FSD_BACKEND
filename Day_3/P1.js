const http = require('http')

const server = http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World\n');
})

server.listen(9000,()=>{
    // if(err)
    //     console.log(err);
    console.log('Server running at http://localhost:9000/');
})