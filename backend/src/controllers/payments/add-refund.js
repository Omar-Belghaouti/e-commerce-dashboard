import { payments } from "../../mock/payments.js";

export const addRefundController = (req, res, next) => {
  const id = req.url.split("/")[1];
  const amount = req.body.amount;
  if (amount === 0) {
    return res.status(403).json({ message: "cannot add refund" });
  }
  for (let i = 0; i < payments.length; i++) {
    if (payments[i].id == id) {
      payments[i].refunded = true;
      if (payments[i].refunds.length) {
        const total = payments[i].refunds.reduce(
          (pre, curr) => pre + curr,
          amount
        );
        if (total > payments[i].montant) {
          return res.status(403).json({ message: "cannot add refund" });
        } else {
          payments[i].refunds.push(amount);
        }
      } else {
        if (amount > payments[i].montant) {
          return res.status(403).json({ message: "cannot add refund" });
        } else {
          payments[i].refunds.push(amount);
        }
      }
      return res.status(200).json({ message: "updated" });
    }
  }
  return res.status(404).json({ message: "not found" });
};
