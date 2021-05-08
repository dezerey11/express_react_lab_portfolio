///// Dependencies /////
const express = require("express");
const cors = require("cors");

///// Import JSON Files /////
const projects = require("./projects.json");
const about = require("./about.json");

///// App Object /////
const app = express();

///// Middleware /////
app.use(cors());

///// Routes /////
//home route
app.get("/", (req, res) => {
  res.send("Hello World");
});

//projects route
app.get("/projects", (req, res) => {
  res.json(projects);
});

//about route
app.get("/about", (req, res) => {
  res.json(about);
});

///// Server Listener /////

//declare a variable for our port number
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));