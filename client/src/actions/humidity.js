import io from 'socket.io-client';
import { SET_HUMIDITY_SOCKET, HUMIDITY_NEW_READING } from './types';
import { EVENT_NEW_READING, HUMIDITY_SOCKET_NAMESPACE } from '../config/Api';

export const init = store => {
  const socket = io(HUMIDITY_SOCKET_NAMESPACE);
  store.dispatch({ type: SET_HUMIDITY_SOCKET, socket });
  socket.on(EVENT_NEW_READING, reading => {
    store.dispatch({ type: HUMIDITY_NEW_READING, reading });
  });
  return socket;
};
