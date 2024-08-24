import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import blogRouter from "./routes/blogRoutes.js";

dotenv.config();

mongoose.set("strictQuery", false);

const app = express();

// Import environment variables
const PORT = process.env.PORT || 3000;
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

// App routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// Blog routes
app.use("/blogs", blogRouter);

// 404
app.use((_req, res) => {
  res.status(404).render("404", { title: "404" });
});
