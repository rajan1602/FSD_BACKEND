const fs = require('fs')
const data = "I am a new data "
fs.writeFile("./data.txt",data,(err)=>{
    if(err) throw err;
    console.log("file created successfully")

})