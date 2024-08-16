import express from "express";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/* console.log(__dirname); */

const app = express();
// Specify which view engine to use
app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

// 404
app.use((req, res) => {
  res.status(404).render("404");
});
