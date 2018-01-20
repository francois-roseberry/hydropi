import io from 'socket.io-client';
import { SET_AIR_TEMPERATURE_SOCKET, AIR_TEMPERATURE_NEW_READING } from './types';
import { EVENT_NEW_READING, AIR_TEMPERATURE_SOCKET_NAMESPACE } from '../config/Api';

export const init = store => {
  const socket = io(AIR_TEMPERATURE_SOCKET_NAMESPACE);
  store.dispatch({ type: SET_AIR_TEMPERATURE_SOCKET, socket });
  socket.on(EVENT_NEW_READING, reading => {
    store.dispatch({ type: AIR_TEMPERATURE_NEW_READING, reading });
  });
  return socket;
};
