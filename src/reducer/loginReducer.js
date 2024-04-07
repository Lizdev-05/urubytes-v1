import { UPDATE_LOGIN_DATA } from "./action";

const initialLoginState = {
  userID: "",
  orgID: "",
  token: "",
};

const loginReducer = (state = initialLoginState, action) => {
  console.log("Current state:", state);
  console.log("Received action:", action);
  switch (action.type) {
    case UPDATE_LOGIN_DATA:
      if (action.payload.user) {
        return {
          ...state,
          userID: action.payload.user.userID,
          orgID: action.payload.user.orgID,
          token: action.payload.token,
        };
      } else {
        return {
          ...state,
          ...action.payload,
        };
      }
    default:
      return state;
  }
};

export default loginReducer;
