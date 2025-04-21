const express = require("express");
require("dotenv").config();
const methodOverride = require("method-override");
const {creaateViewpage} = require("./helpers/create.view.page")

const indexRoute = require('./routes/index.routes');

const PORT = process.env.PORT || 3333;


const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("styles"));
app.use(express.static("images"));
app.use(methodOverride("_method"));
// app.use(express.json()); 


app.use(indexRoute);

app.get("/", (req, res) => {
  res.render(creaateViewpage("index"), { title: "Main page" });
});



app.use((req, res) => {
  res.render(creaateViewpage("404"), { title: "404 page" });
});

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
