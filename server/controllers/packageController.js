const packagesController = require("./PackagesController");

const getPackage = (id, callback) => {
  packagesController.getAllPackages((packages) => {
    const package = packages.find((p) => p.Package === id);
    callback(package);
  });
};

module.exports = { getPackage };
