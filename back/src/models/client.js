const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    lowercase: true
  },
  RG: {
    type: String,
    required: true,
  },
  BirthDate: {
    type: String,
    required: true,
  },
});

mongoose.model("Client", ClientSchema);
