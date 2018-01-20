import io from 'socket.io-client';
import { SET_PUMP_SOCKET, PUMP_NEW_STATE, PUMP_NEW_MODE } from './types';
import { EVENT_NEW_STATE, EVENT_NEW_MODE, COMMAND_SET_STATE, COMMAND_SET_MODE, PUMP_SOCKET_NAMESPACE } from '../config/Api';

export const init = store => {
  const socket = io(PUMP_SOCKET_NAMESPACE);
  store.dispatch({ type: SET_PUMP_SOCKET, socket });
  socket.on(EVENT_NEW_STATE, state => {
    store.dispatch({ type: PUMP_NEW_STATE, state });
  });
  socket.on(EVENT_NEW_MODE, mode => {
    store.dispatch({ type: PUMP_NEW_MODE, mode });
  });
  return socket;
};

export const setState = ({ socket, state }) => dispatch => {
  socket.emit(COMMAND_SET_STATE, state);
};

export const setMode = ({ socket, mode }) => dispatch => {
  socket.emit(COMMAND_SET_MODE, mode);
};
