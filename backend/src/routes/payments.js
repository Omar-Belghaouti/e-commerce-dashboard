import { Router } from "express";
import { getPaymentsController } from "../controllers/payments/index.js";

export const paymentsRouter = Router();

paymentsRouter.get("/", getPaymentsController);
