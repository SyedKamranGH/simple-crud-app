const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      require: false,
    },
  },
  {
    timestamp: true,
  }
);
//always enter singular name as mongos add s and keep it in all lower case
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
