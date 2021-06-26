const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createUserToken = (UserId) => {
  return jwt.sign(
    {
      id: UserId,
    },
    "mobile"
  );
};

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      user.Password = undefined;
      return res.status(201).json({
        user,
        token: createUserToken(user._id),
      });
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  },
  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        messages: "Dados insuficientes",
      });
    }
    try {
      User.findOne({ Email: email }, (err, user) => {
        if (err) return res.status(400).json({ err });

        if (!user) return res.status(400).json({ erro: "login invalido" });

        bcrypt.compare(password, user.Password, (err, same) => {
          if (!same) return res.status(400).json({ erro: "login invalido" });

          user.Password = undefined;
          return res.status(200).json({
            user,
            token: createUserToken(user._id),
          });
        });
      }).select("+Password");
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  },
  async userInfo(req, res) {
    try {
      const user = await User.findById(res.locals.auth_data.id);
      return res.status(200).json({
        user,
      });
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  },
  async uploadImage(req, res) {
    try {
      const user = await User.updateOne(
        { _id: res.locals.auth_data.id },
        { $set: { UrlImage: `files/${req.body.file}` } }
      );

      return res.status(200).json({
        user,
      });
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  },
  async update(req, res) {
    try {
      const { email, name, phone } = req.body;
      const user = await User.updateOne(
        { _id: res.locals.auth_data.id },
        { $set: { Email: email, Name: name, Phone: phone } }
      )
      return res.status(200).json({
        user
      });
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  },
};
