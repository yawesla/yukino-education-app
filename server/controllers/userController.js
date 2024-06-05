const { User } = require("../models");
const { comparePassword } = require("../helpers/encryption");
const { signToken } = require("../helpers/jwt");
// const axios = require("axios");

class userController {
  static async register(req, res, next) {
    try {
      const { username, email, password, profilePicture } = req.body;

      const created = await User.create({
        username,
        email,
        password,
        profilePicture,
      });

      res.status(201).json({
        id: created.id,
        username: created.username,
        email: created.email,
        profilePicture: created.profilePicture,
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) throw { name: "NO_EMAIL" };
      if (!password) throw { name: "NO_PASSWORD" };

      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) throw { name: "INVALID_LOGIN" };

      const validPassword = comparePassword(password, user.password);
      if (!validPassword) throw { name: "INVALID_LOGIN" };

      const token = signToken({
        id: user.id,
        email: user.email,
      });

      res.status(200).json({
        access_token: token,
      });
    } catch (err) {
      // console.log(err);
      next(err);
    }
  }
}

module.exports = userController;
