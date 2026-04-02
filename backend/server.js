require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // keep this
const connectDB = require("./db");

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());           // parses JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // parses URL-encoded bodies
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/auth", require("./auth"));

app.listen(5000, () => console.log("Server running on port 5000"));
