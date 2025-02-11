const fs  = require('fs')

const newdata = 'I am appended at the end of the file'
fs.appendFile('./data.txt',newdata,(err)=>{
    if(err) throw err
    console.log("Data appended successfully")
})