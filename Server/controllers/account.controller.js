import mongoose from "mongoose";
import { Account, User } from "../database/index.js";
import jwt_decrypt from "../utils/jwt_decrypt.js";

const getAccountBalance = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const username = await jwt_decrypt(authHeader);
    if (!username) {  
      return res.status(401).json({ message: 'Unauthorized access' });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const account = await Account.findOne({ userID: user._id });
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }

    return res.status(200).json({ balance: account.balance });
  } catch (err) {
    return res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
};


const transferMoney = async (req, res) => {

  const authHeader = req.headers.authorization;
  const username = await jwt_decrypt(authHeader);
  const Moneysender = await User.findOne({username})
  const userID = Moneysender._id;
  const { to , amount } = req.body;

  const session = await mongoose.startSession();
  session.startTransaction();

  const sender = await Account.findOne({ userID }).session(session);
  if (amount <= 0) {
    return res.status(403).json({ message: "Please add a proper amount" });
  }
  if (sender.balance < amount) {
    await session.abortTransaction();
    return res.status(403).json({ message: "Insufficient money" });
  }
  console.log("Sender", sender);

  const receiver = await Account.findOne({ userID: to }).session(session);
  console.log(receiver, "Receiver");
  if (!receiver) {
    await session.abortTransaction();
    return res.status(403).json({ message: "Receive is not exists" });
  }

  const senderAccount = await Account.findOneAndUpdate(
    { userID: sender.userID },
    { $inc: { balance: -amount } }
  ).session(session);

  const receiverAccount = await Account.findOneAndUpdate(
    { userID: receiver.userID },
    { $inc: { balance: amount } }
  ).session(session);

  await session.commitTransaction();

  return res.status(200).json({ message: "Successfully transferred money"});
};
const getTransactionHistory = (req, res) => {
  res.json({ message: "Successful" });
};

export { getAccountBalance, transferMoney, getTransactionHistory };
