var fs = require("fs");
var path = require("path");

module.exports = (chemin, extension, callback) => {
    fs.readdir(chemin, (err, data) => {
    if (err) return callback(err);

    data = data.filter(function (item) {
    return path.extname(item) === "." + extension;
    });

    callback(err, data);
    });
};
