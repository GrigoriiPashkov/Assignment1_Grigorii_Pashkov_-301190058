const express = require("express");
const PORT = process.env.PORT || 5000;
const expresshbs = require("express-handlebars");
const routeRoutes = require("./routes/rout");
const path = require("path");
const app = express();
const hbs = expresshbs.create({
  layoutsDir: "views/layouts",
  defaultLayout: "main",
  extname: "hbs",
});
app.engine("hbs", hbs.engine);

app.set("view engine", "hbs");
app.set("views", "views");

app.use(routeRoutes);
app.use(express.static("Assignment1 301190058 Grigorii Pashkov"));
app.use("/Images", express.static("Images"));
app.use(express.static("Assignment1 301190058 Grigorii Pashkov"));
app.use("/Files", express.static("Files"));
app.listen(PORT, () => {
  console.log("Server +");
});
