const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use("/static", express.static("static"));

const port = 8000;

app.get("/", (req, res) => {
  res.render("main");
});

app.listen(port, () => {
  console.log("server open", port);
});

app.get("/youtuber1", (req, res) => {
  res.render("youtuber1");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/sign_up", (req, res) => {
  res.render("sign_up");
});
app.get("/menu_1", (req, res) => {
  res.render("menu_1");
});
app.get("/menu_2", (req, res) => {
  res.render("menu_2");
});
app.get("/promotion", (req, res) => {
  res.render("promotion");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/youtuber2", (req, res) => {
  res.render("youtuber2");
});
