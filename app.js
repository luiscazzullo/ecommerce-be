const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

app.use("/api/v1/auth", authRoutes);

app.listen(7500, () => {
  console.log("hola desde el servidor");
});
