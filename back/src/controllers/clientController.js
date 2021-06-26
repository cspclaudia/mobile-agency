const mongoose = require("mongoose");
const Client = mongoose.model("Client");

module.exports = {
  async registerClient(req, res) {
    try {
      const client = await Client.create(req.body);
      return res.status(201).json({
        client,
      });
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  },
  async listClients(req, res) {
    try {
      const clients = await Client.find({});
      return res.status(200).json({
        clients,
      });
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  },
  async removeClient(req, res) {
    try {
      const client = await Client.remove({ _id: req.body.id});
      return res.status(200).json({
        client,
      });
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  },
};
