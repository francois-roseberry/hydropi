import { init as initActuator } from './actuator';
import { SET_LIGHTING_SOCKET, LIGHTING_NEW_STATE, LIGHTING_NEW_MODE } from './types';
import { LIGHTING_SOCKET_NAMESPACE } from '../config/Api';

export const init = store => {
  return initActuator({ store, namespace: LIGHTING_SOCKET_NAMESPACE, actions: {
    setSocket: SET_LIGHTING_SOCKET,
    newState: LIGHTING_NEW_STATE,
    newMode: LIGHTING_NEW_MODE
  }});
};
