import { init as initSensor } from './sensor';
import { SET_WATER_TEMPERATURE_SOCKET, WATER_TEMPERATURE_NEW_READING } from './types';
import { WATER_TEMPERATURE_SOCKET_NAMESPACE } from '../config/Api';

export const init = store => {
  return initSensor({ store, namespace: WATER_TEMPERATURE_SOCKET_NAMESPACE, actions: {
    setSocket: SET_WATER_TEMPERATURE_SOCKET,
    newReading: WATER_TEMPERATURE_NEW_READING
  }});
};
