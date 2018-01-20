import io from 'socket.io-client';
import { EVENT_NEW_STATE, EVENT_NEW_MODE, COMMAND_SET_STATE, COMMAND_SET_MODE } from '../config/Api';

export const init = ({ store, namespace, actions }) => {
  const socket = io(namespace);
  store.dispatch({ type: actions.setSocket, socket });
  socket.on(EVENT_NEW_STATE, state => {
    store.dispatch({ type: actions.newState, state });
  });
  socket.on(EVENT_NEW_MODE, mode => {
    store.dispatch({ type: actions.newMode, mode });
  });
  return socket;
};

export const setState = ({ socket, state }) => dispatch => {
  socket.emit(COMMAND_SET_STATE, state);
};

export const setMode = ({ socket, mode }) => dispatch => {
  socket.emit(COMMAND_SET_MODE, mode);
};
