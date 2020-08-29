var express = require("express");
var router = express.Router();
var packagesController = require("../controllers/PackagesController");

/* GET packages listing. */
router.get("/", function (req, res, next) {
  packagesController.getAllPackages((packages) => {
    res.send(packages);
  });
});

module.exports = router;
