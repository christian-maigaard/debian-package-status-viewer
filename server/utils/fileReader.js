const fs = require("fs");

const readFile = (path, callback) => {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      callback(err);
    }
    callback(data);
  });
};

module.exports = { readFile };
