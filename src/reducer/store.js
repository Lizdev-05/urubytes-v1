// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import loginReducer from "./loginReducer";
// import registrationReducer from "./registrationReducer";
// import sourcesReducer from "./sourcesReducer";
// import tableDataReducer from "./sourcesReducer";

// const loginPersistConfig = {
//   key: "login",
//   storage,
// };

// const sourcesPersistConfig = {
//   key: "sources",
//   storage,
// };

// const rootReducer = {
//   login: persistReducer(loginPersistConfig, loginReducer),
//   registration: registrationReducer,
//   sources: persistReducer(sourcesPersistConfig, sourcesReducer),
//   tableData: tableDataReducer,
// };
// const store = configureStore({
//   reducer: rootReducer,
// });

// const persistor = persistStore(store);

// export { store, persistor };

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./loginReducer";
import registrationReducer from "./registrationReducer";
import sourcesReducer from "./sourcesReducer";
import tableDataReducer from "./sourcesReducer";
import dashboardReducer from "./dashboardReducer";

const loginPersistConfig = {
  key: "login",
  storage,
};

const sourcesPersistConfig = {
  key: "sources",
  storage,
};

const rootReducer = {
  login: persistReducer(loginPersistConfig, loginReducer),
  registration: registrationReducer,
  sources: persistReducer(sourcesPersistConfig, sourcesReducer),
  tableData: tableDataReducer,
  dashboard: dashboardReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
