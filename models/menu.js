const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  restname: {
    type: String,
    required: true,
  },
  menuname: {
    type: String,
    required: true,
  },
  restid:{
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  costmenu: {
    type: Number,
    required: true,
  },
  productTypes: [{
      type: String,
      enum: ['Beef', 'Pork', 'Chicken', 'Milk', 'Egg', 'Vegan', 'Vegetarian', 'Glutten-Free', 'Fish', 'Others'],
    }],
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
