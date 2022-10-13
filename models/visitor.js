const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const visitor = new Schema({
  visitor: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Visitor", visitor)