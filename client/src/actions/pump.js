import { init as initActuator } from './actuator';
import { SET_PUMP_SOCKET, PUMP_NEW_STATE, PUMP_NEW_MODE } from './types';
import { PUMP_SOCKET_NAMESPACE } from '../config/Api';

export const init = store => {
  return initActuator({ store, namespace: PUMP_SOCKET_NAMESPACE, actions: {
    setSocket: SET_PUMP_SOCKET,
    newState: PUMP_NEW_STATE,
    newMode: PUMP_NEW_MODE
  }});
};
