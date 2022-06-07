export const addPaymentsAction = () => async (dispatch, getState) => {
  dispatch({
    type: "PAYMENT_ADD_PAYMENTS",
    payload: {
      refreshing: true,
    },
  });
  const payments = await fetch("http://localhost:3000/payments");
  const paymentsJson = await payments.json();
  dispatch({
    type: "PAYMENT_ADD_PAYMENTS",
    payload: {
      refreshing: false,
      payments: paymentsJson,
    },
  });
};
