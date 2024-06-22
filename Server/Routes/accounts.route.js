import { Router } from "express";
import {
  getAccountBalance,
  transferMoney,
  getTransactionHistory,
} from "../controllers/account.controller.js";
import {userMiddleware} from "../Middlewares/userValidate.js";

const router = Router();

router.post("/balance", userMiddleware,  getAccountBalance);
router.post("/transfer", userMiddleware, transferMoney);
router.get("/transaction-history", userMiddleware, getTransactionHistory);

export default router;