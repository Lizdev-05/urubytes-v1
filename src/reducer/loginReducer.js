import { UPDATE_LOGIN_DATA } from "./action";

const initialLoginState = {
  userID: "",
  orgID: "",
  token: "",
};

const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
