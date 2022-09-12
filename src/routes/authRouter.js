import { Router } from "express";
import { login } from "../controllers/authController.js";
import { validateLoginSchema } from "../middleware/validateLoginSchema.js";

const authRouter = Router();
authRouter.post('/login', validateLoginSchema, login);

export default authRouter;