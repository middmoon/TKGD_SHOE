const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", hbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

const routes = require("./routes");

routes(app);

app.listen(PORT, () => {
  console.log("port:" + PORT);
});
