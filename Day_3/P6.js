const http = require('http');

const server = http.createServer(async(req,res)=>{
    const data = await fetch("http://dummyjson.com/products")
    res.statusCode = 200;
    res.setHeader("content-type","application/json");
    const newproducts = await data.json();
    const myproducts = newproducts.products;
    const title = myproducts.map((product)=>{
        return product.title;
    });
    //console.log(newproducts);
    res.end(JSON.stringify(newproducts));
});

server.listen(9000,(err)=>{
    if (err) throw err
    else
    console.log("Server running at http://localhost:9000/");
});