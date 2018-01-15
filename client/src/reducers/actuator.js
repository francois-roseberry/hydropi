import { Modes } from '../components/actuator/modes';

export const createActuatorReducer = (newStateActionType, newModeActionType) => (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case newStateActionType:
      return { ...state, state: action.state };
    case newModeActionType:
      return { ...state, mode: action.mode };
    default:
      return state;
  }
}

const INITIAL_STATE = { state: false, mode: Modes.MANUAL };
