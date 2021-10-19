const { Schema, model } = require("mongoose");

const OrderSchema = Schema(
  {
    totalPrice: {
      type: Number,
      required: [true, "El precio final es obligatorio"],
      default: 0.0,
    },
    isPaid: {
      type: String,
      default: false,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    status: {
      type: String,
      default: "En proceso",
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    productsItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Order", OrderSchema);
