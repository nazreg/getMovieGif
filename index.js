require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();

const PORT = process.env.PORT !== undefined ? process.env.PORT : 3000;

app.get("/", (req, res) => {
  res.send("index");
});

app.get("/movies", (req, res) => {
  const url = `http://www.omdbapi.com/?apikey=${process.env.OMDB_APIKEY}&s=${req.query.s}`;
  axios.get(url).then((movies) => {
    return res.json(movies.data);
  });
});

app.listen(PORT, () => {
  console.log("Server started");
});
