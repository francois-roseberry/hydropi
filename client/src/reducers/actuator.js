import { Modes } from '../containers/actuator/modes';

export const createActuatorReducer = newStateActionType => (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case newStateActionType:
      return { ...state, state: action.state };
    default:
      return state;
  }
}

const INITIAL_STATE = { state: false, mode: Modes.AUTOMATIC };
