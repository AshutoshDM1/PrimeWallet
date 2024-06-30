import { Router } from "express";
import {
  getAccountBalance,
  transferMoney,
  getTransactionHistory,
  addMoney,
} from "../controllers/account.controller.js";
import { userMiddleware } from "../Middlewares/userValidate.js";

const router = Router();

router.get("/balance", userMiddleware, getAccountBalance);
router.post("/transfer", userMiddleware, transferMoney);
router.post("/addmoney", userMiddleware, addMoney);
router.get("/transaction-history", userMiddleware, getTransactionHistory);

export default router;
