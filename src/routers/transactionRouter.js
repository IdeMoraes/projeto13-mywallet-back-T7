import { Router } from "express";
import { creatEntry } from "../controllers/transactionController.js";
import { validateEntrySchema } from "../middlewares/validateEntrySchema.js";
import { validateToken } from "../middlewares/validateToken.js";

const transactionRouter = Router();
transactionRouter.post('/new-entry', validateToken, validateEntrySchema, creatEntry);

export default transactionRouter;