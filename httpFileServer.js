var  http = require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/plain'})
    var toto =fs.createReadStream(process.argv[3],'utf-8')
    
    res.end(toto)
      
})

server.listen(process.argv[2])