const fs = require('fs')

fs.unlink("./mydir/data.txt",(err)=>{
    if(err) throw err
    console.log("File Deleted")
})