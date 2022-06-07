import { payments } from "../../mock/payments.js";

export const getPaymentsController = (req, res, next) => {
  return res.json(payments);
};
