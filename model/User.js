const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    maxLength: [30, "Debe tener menos de 30 caracteres"],
    required: true,
    trim: true,
  },

  lastname: {
    type: String,
    maxLength: [30, "Debe tener menos de 30 caracteres"],
    required: true,
    trim: true,
  },

  email: {
    type: String,
    minLength: [4, "Debe tener entre 4 y 30 caracteres"],
    maxLength: [30, "Debe tener entre 4 y 30 caracteres"],
    required: true,
    trim: true,
    unique: true,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("User", userSchema);
