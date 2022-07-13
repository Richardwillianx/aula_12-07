import { combineReducers } from "redux";
import contador from "./contador/reducers";

const reducers = combineReducers({
  contador,
});

export default reducers;
export type State = ReturnType<typeof reducers>;
