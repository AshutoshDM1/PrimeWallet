import jwt from "jsonwebtoken";
import config from "../config/index.js";

const jwtSecret = config.jwtSecret;

const jwt_decrypt = async (authHeader) => {
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
    const username = decodedValue.username;
    return username;
  } catch (error) {
    res.status(403).json({ msg: "Invalid token" });
  }
};

export default jwt_decrypt ;
