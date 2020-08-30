var express = require("express");
var router = express.Router();
var packagesController = require("../controllers/PackagesController");
var packageController = require("../controllers/packageController");

/* GET packages listing. */
router.get("/", function (req, res, next) {
  packagesController.getAllPackages((packages) => {
    res.send(packages);
  });
});

/* GET package by id. */
router.get("/:id", function (req, res, next) {
  packageController.getPackage(req.params.id, (package) => {
    if (package === undefined)
      res
        .status(404)
        .send("Not found");
    res.send(package);
  });
});

module.exports = router;
  