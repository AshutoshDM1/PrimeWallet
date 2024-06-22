const getAccountBalance = async (req, res) => {
  const userID = req.userID;
  const userDetails = await Account.findOne({ userID });
  return res.status(200).json({ userDetails });
};
const transferMoney = (req, res) => {
  res.json({ message: "Successful" });
};
const getTransactionHistory = (req, res) => {
  res.json({ message: "Successful" });
};

export { getAccountBalance, transferMoney, getTransactionHistory };
