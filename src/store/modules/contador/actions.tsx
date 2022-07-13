import { ActionType } from "../actions-type";

interface IncrementarAction {
  type: ActionType.INCREMENTAR;
  payload: number;
}

interface DecrementarAction {
  type: ActionType.DECREMENTAR;
  payload: number;
}

export type Action = IncrementarAction | DecrementarAction;
