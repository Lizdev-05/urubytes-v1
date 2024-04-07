import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import registrationReducer from "./registrationReducer";
import loginReducer from "./loginReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  registration: registrationReducer,
  login: loginReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

let persistor = persistStore(store);

export { store, persistor };
