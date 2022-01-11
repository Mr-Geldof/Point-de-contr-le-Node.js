var myModule = require("./filtered-ls");

var chemin = process.argv[2];
var extension = process.argv[3];

myModule(chemin, extension,  (err, data) =>{
    if (err) throw err
    data.forEach((item) => {
    console.log(item);
    });
});
