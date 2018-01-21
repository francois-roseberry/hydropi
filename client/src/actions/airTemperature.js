import { init as initSensor } from './sensor';
import { SET_AIR_TEMPERATURE_SOCKET, AIR_TEMPERATURE_NEW_READING } from './types';
import { AIR_TEMPERATURE_SOCKET_NAMESPACE } from '../config/Api';

export const init = store => {
  return initSensor({ store, namespace: AIR_TEMPERATURE_SOCKET_NAMESPACE, actions: {
    setSocket: SET_AIR_TEMPERATURE_SOCKET,
    newReading: AIR_TEMPERATURE_NEW_READING
  }});
};
