import {
  addRefundController,
  getPaymentsController,
} from "../controllers/payments/index.js";

import { Router } from "express";

export const paymentsRouter = Router();

paymentsRouter.get("/", getPaymentsController);
paymentsRouter.put("/:id", addRefundController);
