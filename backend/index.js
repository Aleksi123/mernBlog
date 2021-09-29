const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const postRoute = require("./routes/posts");

dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());

mongoose.connect(process.env.MONGO, () => {
  console.log("connected to mongo");
});

app.use("/api/posts", postRoute);

app.listen(port, () => {
  console.log("backend running");
});
