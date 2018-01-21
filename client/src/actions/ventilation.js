import { init as initActuator } from './actuator';
import { SET_VENTILATION_SOCKET, VENTILATION_NEW_STATE, VENTILATION_NEW_MODE } from './types';
import { VENTILATION_SOCKET_NAMESPACE } from '../config/Api';

export const init = store => {
  return initActuator({ store, namespace: VENTILATION_SOCKET_NAMESPACE, actions: {
    setSocket: SET_VENTILATION_SOCKET,
    newState: VENTILATION_NEW_STATE,
    newMode: VENTILATION_NEW_MODE
  }});
};
