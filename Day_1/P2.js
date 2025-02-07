const fs = require('fs')

// Read JSON file
const newdata = "I am new data";
//const data = fs.readFileSync('./data.txt','utf8')

fs.writeFileSync('./data.txt',newdata)
//console.log(data)