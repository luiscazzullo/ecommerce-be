const express = require("express");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/v1/auth", authRoutes);

app.listen(7500, () => {
  console.log("hola desde el servidor");
});


