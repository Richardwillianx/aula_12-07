import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { Reducer, Action } from "redux";

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: "aula_12-07_rw",
      storage,
      whitelist: ["contador"],
    },
    reducers
  );

  return persistedReducer;
};
