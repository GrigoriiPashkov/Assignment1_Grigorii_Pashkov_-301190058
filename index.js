const express = require("express");

const PORT = process.env.PORT || 4000;
const expresshbs = require("express-handlebars");
const routeRoutes = require("./routes/rout");
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

app.listen(PORT, () => {
  console.log("Server +");
});
