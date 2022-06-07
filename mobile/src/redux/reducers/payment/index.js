const initialState = { };

export const payment = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "PAYMENT_ADD_PAYMENTS":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
