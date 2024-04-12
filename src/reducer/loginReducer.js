import { UPDATE_LOGIN_DATA } from "./action";

const initialLoginState = {
  userID: "",
  orgID: "",
  token: "",
};

// const loginReducer = (state = initialLoginState, action) => {
//   console.log("Current state:", state);
//   console.log("Received action:", action);
//   switch (action.type) {
//     case UPDATE_LOGIN_DATA:
//       return {
//         ...state,
//         ...action.payload,
//       };
//     default:
//       return state;
//   }
// };

const loginReducer = (state = initialState, action) => {
  console.log("Current state:", state);
  console.log("Received action:", action);
  switch (action.type) {
    case "UPDATE_LOGIN_DATA":
      return {
        ...state,
        userID: action.payload.userID,
        orgID: action.payload.orgID,
        token: action.payload.token,
      };
    default:
      return state;
  }
};
export default loginReducer;
