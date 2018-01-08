import io from 'socket.io-client';
import { HUMIDITY_NEW_READING } from './types';
import { EVENT_NEW_READING, HUMIDITY_SOCKET_NAMESPACE } from '../config/Api';

const socket = io(HUMIDITY_SOCKET_NAMESPACE);

export const init = store => {
  socket.on(EVENT_NEW_READING, reading => {
    store.dispatch({ type: HUMIDITY_NEW_READING, reading });
  });
};
