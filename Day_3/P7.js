const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url == '/home'){
        res.end('<h1 style="Backgroundcolor:red"> Welcome to home </h1>')
    }
    else if(req.url == '/about'){
        res.end('<h1> Welcome to about Page </h1>')
    }
    else{
        res.end('<h1> Page not Found </h1>')
    }
});
server.listen(9000,(err)=>{
    if (err) throw err
    console.log('Server is running at port http://localhost:9000/')
});