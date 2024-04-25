import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["items"],
//   blacklist: ["_persist"]
// };

export const store = configureStore({
    reducer: {
      contacts: contactsReducer,
      filters: filtersReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);