const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const tokenSchema = new Schema({
  data: {
    type: [],
    default: [],
  },
});
module.exports = model("Token", tokenSchema);
