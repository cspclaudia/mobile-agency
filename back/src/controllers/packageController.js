const mongoose = require("mongoose");
const Package = mongoose.model("Package");

module.exports = {
  async registerPackage(req, res) {
    try {
      const package = await Package.create(req.body);
      return res.status(201).json({
        package,
      });
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  },
  async listPackages(req, res) {
    try {
      const packages = await Package.find({});
      return res.status(200).json({
        packages,
      });
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  },
  async removePackage(req, res) {
    try {
      const package = await Package.remove({ _id: req.body.id});
      return res.status(200).json({
        package,
      });
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  },
};
