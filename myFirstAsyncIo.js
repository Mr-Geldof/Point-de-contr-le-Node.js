var fs = require('fs');

fs.readFile(process.argv[2],(err,data)=>{
    if (err) throw err;
    var nombre = data.toString().split('\n').length - 1;
    console.log(nombre);
})
