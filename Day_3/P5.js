const http = require('http');
const fs = require('fs/promises');


const server = http.createServer(async(req,res)=>{
    const data = await fs.readFile("./data.json")
    res.writeHead(200,{"content-type":"application/json"});
    res.end(data);
});

server.listen(9000,(err)=>{
    if (err) throw err
    else
    console.log("Server running at http://localhost:9000/");
});