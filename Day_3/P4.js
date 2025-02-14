const http = require('http')
const Users =[
    {id: 1, name:'John Doe', email:'xyz@gmail.com'},
    {id: 2, name:'Jane Doe', email:'abc@gmail.com'},
    {id: 3, name:'John Smith', email:'pqr@gmail.com'}
]
const server = http.createServer((req,res)=>{
    console.log('New request received')
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(Users));
});
server.listen(9000, () => {
    
    console.log("Server running at http://localhost:9000/");
});
