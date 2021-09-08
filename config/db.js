const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/firstDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("base conectada");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
