import io from 'socket.io-client';
import { EVENT_NEW_READING } from '../config/Api';

export const init = ({ store, namespace, actions }) => {
  const socket = io(namespace);
  store.dispatch({ type: actions.setSocket, socket });
  socket.on(EVENT_NEW_READING, reading => {
    store.dispatch({ type: actions.newReading, reading });
  });
  return socket;
};
