import { Account, User } from "../database/index.js";
import config from "../config/index.js";
import jwt from "jsonwebtoken";
import { hashingPass, checkHashingPass } from "../utils/bcryptUtils.js";

const jwtSecret = config.jwtSecret;
const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }
    let hashedPassword = await hashingPass(password);

    await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    const findUser = await User.findOne({ username })
    if (findUser) {
      await Account.create({
        username: findUser.username,
        userID: findUser._id,
        balance: 5000,
      });
    }
    return res.status(200).json({ message: "User SignUp Successful" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      const match = await checkHashingPass(password, existingUser.password);
      if (match === true) {
        const token = jwt.sign(
          {
            username,
          },
          jwtSecret
        );
        res.json({
          token,
        });
      } else if (match === false) {
        res.status(411).json({
          message: "Incorrect password",
        });
      }
    } else {
      return res.status(401).json({ message: "Invalid Username or Password" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
const users = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({ allUsers });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export { signup, login, users };
