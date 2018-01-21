import { init as initSensor } from './sensor';
import { SET_HUMIDITY_SOCKET, HUMIDITY_NEW_READING } from './types';
import { HUMIDITY_SOCKET_NAMESPACE } from '../config/Api';

export const init = store => {
  return initSensor({ store, namespace: HUMIDITY_SOCKET_NAMESPACE, actions: {
    setSocket: SET_HUMIDITY_SOCKET,
    newReading: HUMIDITY_NEW_READING
  }});
};
