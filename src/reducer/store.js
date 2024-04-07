// import { configureStore } from "@reduxjs/toolkit";
// import registrationReducer from "./registrationReducer";
// import loginReducer from "./loginReducer";

// const store = configureStore({
//   reducer: {
//     registration: registrationReducer,
//     login: loginReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import registrationReducer from "./registrationReducer";
import loginReducer from "./loginReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = {
  registration: registrationReducer,
  login: loginReducer,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

let persistor = persistStore(store);

export { store, persistor };
