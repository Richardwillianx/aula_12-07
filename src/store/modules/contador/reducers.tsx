import { Action } from "./actions";
import { ActionType } from "../actions-type";

const initialState = 0;

export default function contador(state: number = initialState, action: Action) {
  switch (action.type) {
    case ActionType.INCREMENTAR:
      return state + action.payload;
    case ActionType.DECREMENTAR:
      return state - action.payload;
    default:
      return state;
  }
}
