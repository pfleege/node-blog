import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Blog from "./models/blog.js";

dotenv.config();

mongoose.set("strictQuery", false);

const app = express();

// Import environment variables
const PORT = process.env.PORT || 3010;
const dbConnection = process.env.CONNECTION;

// Add DB connection string, set up Mongoose and connect to DB
const start = async () => {
  try {
    await mongoose.connect(dbConnection);

    app.listen(PORT, () => {
      console.log("App listening to port " + PORT);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};

start();

// Register public folder and middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Specify which view engine to use
app.set("view engine", "ejs");

// Test MongoDB routes
/* app.get("/blogs/create", (req, res) => {
  const blog = new Blog({
    title: "Our cryptonite",
    author: "Mr. Glass",
    blogText:
      "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",
  });

  blog
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
}); */

app.get("/blogs", (req, res) => {
  Blog.find()
    .then((data) => {
      res.render("index", { title: "Home", blogs: data });
    })
    .catch((err) => {
      console.error("Encountered the following error: " + err);
    });
});

app.post("/blogs", (req, res) => {
  // Test the POST request
  console.log(req.body);
  const blog = new Blog(req.body);

  blog
    .save()
    .then((data) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.error("Encountered the following error: " + err);
    });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Add Blog" });
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((data) => {
      res.render("blog-details", { title: "Blog Details", blog: data });
    })
    .catch((err) => {
      console.error("Encountered the following error: " + err);
    });
});

app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((data) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.error("Encountered the following error: " + err);
    });
});

// 404
app.use((_req, res) => {
  res.status(404).render("404", { title: "404" });
});
