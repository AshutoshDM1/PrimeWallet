import { Router } from "express";
import userValidate from "../Middlewares/userValidate.js";
import { registerSchema, deleteUserSchema } from '../schemas/zodSchema.js';
import zodValidate from '../Middlewares/zodValidate.js';
import { signup, login, } from "../controllers/userController.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Sign Up Page"})
});
router.post("/signup", zodValidate(registerSchema), signup);
router.post("/login", login);

export default router;
