const fileReader = require("../utils/fileReader");
const constants = require("../constants");

const getAllPackages = (callback) => {
  fileReader.readFile(constants.MOCK_DATA_PATH, (data) => {
    let attributes = data.split("\n");
    let packages = [];
    let package = {};
    let previousDescriptionValue;
    attributes.forEach((attribute) => {
      if (attribute !== "") {
        var key = attribute.substr(0, attribute.indexOf(":"));
        var value = attribute.substr(
          attribute.indexOf(":") + 2,
          attribute.length
        );
        if (key === "") {
          key = "Description";
          value = previousDescriptionValue + " " + value;
        } else {
          previousDescriptionValue = "";
        }
        package[key] = value;
        previousDescriptionValue = value;
      } else {
        packages.push(package);
        package = {};
      }
    });
    // sort packages in alphabetical order
    packages.sort((a, b) => (a.Package > b.Package ? 1 : -1));
    // remove any empty packages
    packages = packages.filter((value) => Object.keys(value).length !== 0);
    callback(packages);
  });
};

module.exports = { getAllPackages };
