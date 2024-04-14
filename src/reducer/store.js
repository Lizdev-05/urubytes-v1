import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./loginReducer";
import registrationReducer from "./registrationReducer";
import sourcesReducer from "./sourcesReducer";

const persistConfig = {
  key: "login",
  storage,
};

const rootReducer = {
  login: persistReducer(persistConfig, loginReducer),
  registration: registrationReducer,
  sources: persistReducer(persistConfig, sourcesReducer),
};

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
