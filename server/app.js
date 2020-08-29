var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var packagesRouter = require("./routes/packages");

var app = express();
const PORT = process.env.PORT || 5000;

// use it before all route definitions
app.use(cors({ origin: "http://localhost:3000" }));

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
