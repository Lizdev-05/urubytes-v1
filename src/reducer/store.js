import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./registrationReducer";
import loginReducer from "./loginReducer";

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    login: loginReducer,
  },
});

export default store;
