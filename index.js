const express = require("express");

const session = require("express-session");

var consign = require("consign");

const app = express();
app.use(session({ secret: "7777777" }));

bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
var path = require("path");
app.set("views", path.join(__dirname, "views/usuario"));

consign().include("controller/routes").into(app);

app.listen(3000, function () {
  console.info("Servidor funcionando");
});
