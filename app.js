import express from "express";

const app = express();

// Register public folder
app.use(express.static("public"));

// Temporary blog data

const blogs = [
  {
    id: 1,
    title: "Blog 1",
    blogText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt quo possimus est commodi doloremque ipsam laudantium suscipit, dolore dignissimos optio, minima quas aperiam cum omnis tenetur qui quidem reiciendis. Rerum ipsa nobis repellat porro maxime quis quam recusandae est.",
  },
  {
    id: 2,
    title: "Blog 2",
    blogText:
      "Lorem ipsum est commodi doloremque ipsam laudantium suscipit, dolore dignissimos optio, minima quas aperiam cum omnis tenetur qui quidem reiciendis.",
  },
  {
    id: 3,
    title: "Blog 3",
    blogText:
      "Lorem quo possimus est commodi doloremque ipsam laudantium suscipit, dolore dignissimos optio, minima quas aperiam cum omnis tenetur qui quidem reiciendis. Rerum ipsa nobis repellat porro maxime quis quam recusandae est.",
  },
];

// Specify which view engine to use
app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Add Blog" });
});

// 404
app.use((_req, res) => {
  res.status(404).render("404", { title: "404" });
});
