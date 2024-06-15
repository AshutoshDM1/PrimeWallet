import bcrypt from "bcrypt"; 

const saltRounds = 8;

let hashingPass = async (password) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (err) {
    res.status(411).json({ massage: err.err });
  }
};

let checkHashingPass = async (enterPassword, hashedPassword) => {
  try {
    const match = await bcrypt.compare(enterPassword, hashedPassword);
    if (match) {
      return match;
    } else {
      return res.status(411).json({ massage: "Passwords does not match!" });
    }
  } catch (err) {
    console.error(err);
  }
};

export { hashingPass, checkHashingPass };