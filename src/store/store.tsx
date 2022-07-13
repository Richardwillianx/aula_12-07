import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./modules/rootReducer";
import persistReducer from "./persistReduces";

const store = createStore(
  persistReducer(reducers),
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);
export { store, persistor };
