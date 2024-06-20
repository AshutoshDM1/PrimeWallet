import jwt from "jsonwebtoken";
import  config  from "../config/index.js";
import { User } from "../database/index.js";

const jwtSecret = config.jwtSecret;

async function userMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({ msg: "Authorization header missing" });
  }

  const words = authHeader.split(" ");
  if (words.length !== 2 || words[0] !== "Bearer") {
    return res.status(403).json({ msg: "Invalid authorization format" });
  }

  const jwtToken = words[1];

  try {
    const decodedValue = jwt.verify(jwtToken, jwtSecret);
    if (decodedValue.username) {
      const existingUsername = decodedValue.username;
      try {
        const thatUser = await User.findOne({ username: existingUsername });
        if (thatUser.username === existingUsername) {
          next();
        }
      } catch (error) {
        res.status(403).json({ msg: "Username Not Found In Database" });
      }
    } else {
      res.status(403).json({ msg: "You are not authenticated" });
    }
  } catch (error) {
    res.status(403).json({ msg: "Invalid token" });
  }
}

export  {userMiddleware};