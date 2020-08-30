const packagesController = require("./PackagesController");
const helper = require("../utils/helpers");

const getPackage = (id, callback) => {
  packagesController.getAllPackages((packages) => {
    let package = packages.find((p) => p.Package === id);
    if (package.length === 0) callback({});
    package = addDependencies(package);
    addReverseDependencies(package, packages, (enrichedPackage) => {
      handlePipeCharacters(enrichedPackage, packages, (package) => {
        callback(package);
      });
    });
  });
};

// adds package dependencies and reverse dependencies to the package
const addDependencies = (package) => {
  package.Dependencies = {};
  package.Dependencies.PackageDependencies = [];
  if (package.Depends === undefined) return package;

  let PackageDependencies = helper.removeParentheses(package.Depends);

  // format into list to make data ready for front-end
  PackageDependencies = PackageDependencies.split(",").map((dependency) => {
    return dependency.trim();
  });

  package.Dependencies.PackageDependencies = PackageDependencies;
  return package;
};

const addReverseDependencies = (package, packages, callback) => {
  // search all packages for dependencies matching the current package
  let reverseDependencies = [];
  for (p in packages) {
    if (packages[p].Depends === undefined) continue;
    if (packages[p].Depends.includes(package.Package))
      reverseDependencies.push(packages[p].Package);
  }

  package.Dependencies.ReverseDependencies = reverseDependencies;
  callback(package);
};

const handlePipeCharacters = (package, packages, callback) => {
  let alternativeDependencies = [];
  let packageDependencies = package.Dependencies.PackageDependencies;
  package.Dependencies.UnlistedDependencies = [];

  for (p in packageDependencies) {
    if (!packageDependencies[p].includes("|")) continue;
    alternativeDependencies = packageDependencies[p]
      .split("|")
      .map((dependency) => {
        return dependency.trim();
      });
    // remove package with pipe characters
    packageDependencies.splice(p, 1);
  }

  alternativeDependencies.forEach((dependency) => {
    let package = packages.find((p) => {
      if (p.Depends !== undefined && p.Depends.includes(dependency)) return p;
    });
    if (package.length === 0) {
      package.Dependencies.UnlistedDependencies.push(dependency);
    } else {
      package.Dependencies.PackageDependencies.push(dependency);
    }
  });

  // sort dependencies in alphabetical order
  package.Dependencies.PackageDependencies.sort((a, b) =>
    a.Package > b.Package ? 1 : -1
  );
  package.Dependencies.UnlistedDependencies.sort((a, b) =>
    a.Package > b.Package ? 1 : -1
  );

  callback(package);
};

module.exports = { getPackage };
