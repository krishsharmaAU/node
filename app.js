const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("hello");
});
