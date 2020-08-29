const packagesController = require("./PackagesController");

const getPackage = (id, callback) => {
  packagesController.getAllPackages((packages) => {
    let package = packages.find((p) => p.Package === id);
    package = addDependencies(package);
    addReverseDependencies(package, packages, (enrichedPackage) => {
      callback(enrichedPackage);
    });
  });
};

// adds package dependencies and reverse dependencies to the package
const addDependencies = (package) => {
  package.Dependencies = {};
  // Remove text between parentheses
  const PackageDependencies = package.Depends.replace(/ *\([^)]*\) */g, "");
  // format into list to make data ready for front-end
  package.Dependencies.PackageDependencies = PackageDependencies.split(",").map(
    (dependency) => {
      return dependency.trim();
    }
  );
  package.Dependencies.PackageDependenciesCount =
    package.Dependencies.PackageDependencies.length;
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

module.exports = { getPackage };
