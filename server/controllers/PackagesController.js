const fileReader = require("../utils/fileReader");
const constants = require("../constants");
let previousDescriptionValue;

const getAllPackages = (callback) => {
  fileReader.readFile(constants.MOCK_DATA_PATH, (data) => {
    let attributes = data.split("\n");
    let packages = [];
    let package = {};

    attributes.forEach((attribute) => {
      if (attribute !== "") {
        var key = attribute.substr(0, attribute.indexOf(": "));
        var value = attribute.substr(
          attribute.indexOf(": ") + 2,
          attribute.length
        );
        let keyValue = handleDescriptionFormatting(package, key, value);
        package[keyValue.key] = keyValue.value;
        previousDescriptionValue = keyValue.value;
      } else {
        packages.push(package);
        package = {};
        previousDescriptionValue = "";
      }
    });
    // sort packages in alphabetical order
    packages.sort((a, b) => (a.Package > b.Package ? 1 : -1));
    // remove any empty packages
    packages = packages.filter((value) => Object.keys(value).length !== 0);
    callback(packages);
  });
};

const handleDescriptionFormatting = (package, key, value) => {
  // add first part of a description as a special property
  if (key === "Description") {
    package["DesciptionSummary"] = value;
    value = "";
  }
  // empty keys are currently always descriptions
  if (key === "") {
    key = "Description";
    if (value === ".") value = ""; // removes additional "." from description
    value = previousDescriptionValue + " " + value;
  } else {
    previousDescriptionValue = "";
  }
  return {
    key: key,
    value: value,
  };
};

module.exports = { getAllPackages };
