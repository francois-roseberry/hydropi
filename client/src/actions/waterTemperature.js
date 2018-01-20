import io from 'socket.io-client';
import { SET_WATER_TEMPERATURE_SOCKET, WATER_TEMPERATURE_NEW_READING } from './types';
import { EVENT_NEW_READING, WATER_TEMPERATURE_SOCKET_NAMESPACE } from '../config/Api';

export const init = store => {
  const socket = io(WATER_TEMPERATURE_SOCKET_NAMESPACE);
  store.dispatch({ type: SET_WATER_TEMPERATURE_SOCKET, socket });
  socket.on(EVENT_NEW_READING, reading => {
    store.dispatch({ type: WATER_TEMPERATURE_NEW_READING, reading });
  });
  return socket;
};
