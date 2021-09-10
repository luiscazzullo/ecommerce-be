const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    minLength: [3, "El nombre debe tener mas de 3 caracteres"],
    maxLenght: [30, "El nombre debe tener menos de 30 caracteres"],
    required: true,
    trim: true,
  },

  lastname: {
    type: String,
    maxLength: [30, "El apellido debe tener menos de 30 caracteres"],
    required: true,
    trim: true,
  },

  email: {
    type: String,
    minLenght: [4, "El email debe tener entre 4 y 30 caracteres"],
    maxLength: [30, "El email debe tener entre 4 y 30 caracteres"],
    required: true,
    trim: true,
    unique: true,
  },

  password: {
    type: String,
    minLength: [8, "La contraseña debe tener mas de 8 caracteres"],
    maxLenght: [30, "La contraseña debe tener menos de 30 caracteres"],
    required: true,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("User", userSchema);
