const packagesController = require("./PackagesController");
const helper = require("../utils/helpers");

const getPackage = (id, callback) => {
  packagesController.getAllPackages((packages) => {
    let package = packages.find((p) => p.Package === id);
    if (package === undefined) return callback(undefined);
    package = addDependencies(package, packages);
    addReverseDependencies(package, packages, (enrichedPackage) => {
      handlePipeCharacters(enrichedPackage, packages, (package) => {
        callback(package);
      });
    });
  });
};

// adds package dependencies and reverse dependencies to the package
const addDependencies = (package, packages) => {
  package.Dependencies = {};
  package.Dependencies.PackageDependencies = [];
  if (package.Depends === undefined) return package;

  let PackageDependencies = helper.removeParentheses(package.Depends);

  // format into list to make data ready for front-end
  PackageDependencies = PackageDependencies.split(",").map((dependency) => {
    return dependency.trim();
  });

  PackageDependencies = PackageDependencies.map((dependency) => {
    return {
      Dependency: dependency,
      isListed: packageExsists(dependency, packages),
    };
  });

  package.Dependencies.PackageDependencies = PackageDependencies;
  return package;
};

const packageExsists = (package, packages) => {
  let foundPackage = packages.find((p) => p.Package === package);

  if (foundPackage === undefined) return false;
  return true;
};

const addReverseDependencies = (package, packages, callback) => {
  // search all packages for dependencies matching the current package
  let reverseDependencies = [];
  for (p in packages) {
    if (packages[p].Depends === undefined) continue;
    if (packages[p].Depends.includes(package.Package))
      reverseDependencies.push({
        Dependency: packages[p].Package,
        isListed: true,
      });
  }

  package.Dependencies.ReverseDependencies = reverseDependencies;
  callback(package);
};

const handlePipeCharacters = (package, packages, callback) => {
  let alternativeDependencies = [];
  let packageDependencies = package.Dependencies.PackageDependencies;
  for (p in packageDependencies) {
    if (!packageDependencies[p].Dependency.includes("|")) continue;
    alternativeDependencies = packageDependencies[p].Dependency.split("|").map(
      (dependency) => {
        return dependency.trim();
      }
    );
    // remove package with pipe characters
    packageDependencies.splice(p, 1);
  }

  alternativeDependencies.forEach((dependency) => {
    packageDependencies.push({
      Dependency: dependency,
      isListed: packageExsists(dependency, packages),
    });
  });

  // sort dependencies in alphabetical order
  package.Dependencies.PackageDependencies.sort((a, b) =>
    a.Package > b.Package ? 1 : -1
  );
  callback(package);
};

module.exports = { getPackage };
