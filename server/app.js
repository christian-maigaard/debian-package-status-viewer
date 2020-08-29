var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var packagesRouter = require("./routes/packages");

var app = express();
const PORT = process.env.PORT || 5000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/packages", packagesRouter);

app.listen(PORT, () => {
  console.log(
    `debian-package-status-viewer server listening at http://localhost:${PORT}`
  );
});

module.exports = app;
