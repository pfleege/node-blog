# Node/MongoDB Application - Movie Quotes Blog

![](./public/NodeBlog.png)

<p align="center">
  Weather Application Demo Page by <a href="https://iceeqsolutions.fi/">iCeeqSolutions</a>
</p>

## About

The Movie Quotes Blog is a Node demo project demonstrating the use of MVC structure, the possibility to connect to an external database (MongoDB) and the use of environment variables to allow database access without sharing the actual connection string.

In MongoDB, we've used triggers to schedule database reset so that any inserts and deletions are visible only for a short period of time (5 minutes), before re-setting the app to its original state. This allows users to freely test the application without consequences.

## Demo

👁️ [Live Demo](https://test.com)

## Built with

- JavaScript (Node)
- Express
- EJS
- CSS
- dotenv
- MongoDB
- Mongoose

## Features

- Database access with create, read and delete rights
- Responsive design
- Environment variables
- Asynchronous data fetching

<br/><br/>

<p align="center"><a href="https://iceeqsolutions.fi/"><img height="30px" width="211px" src=".public/iCS_Logo_Dark.png"></a></p>
<br/><br/>
