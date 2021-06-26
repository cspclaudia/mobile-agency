const mongoose = require("mongoose");
const PackageSchema = new mongoose.Schema({
  Destiny: {
    type: String,
    required: true,
  },
  DateStart: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
});

mongoose.model("Package", PackageSchema);
