import { Dispatch } from "redux";
import { Action } from "./actions";
import { ActionType } from "../actions-type";

export const incrementarAction = (valor: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INCREMENTAR,
      payload: valor,
    });
  };
};

export const decrementarAction = (valor: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DECREMENTAR,
      payload: valor,
    });
  };
};
