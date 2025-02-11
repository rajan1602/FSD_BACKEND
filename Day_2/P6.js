const fs = require('fs')

fs.rmdir('mydir',(e) => {
    if(e) throw e
    console.log("Directory deleted successfully")
})