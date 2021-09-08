const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.listen(7500, () => {
  console.log("hola desde el servidor");
});
