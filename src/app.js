const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const db = require("./db/config");

const app = express();

app.db = db;

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.use(routes);

module.exports = app;
