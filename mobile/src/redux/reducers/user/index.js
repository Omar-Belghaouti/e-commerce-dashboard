const initialState = { };

export const user = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "USER_SIGNUP":
      return { ...state, ...action.payload };

    case "USER_LOGIN":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
