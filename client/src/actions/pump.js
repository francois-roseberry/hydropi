import io from 'socket.io-client';
import { PUMP_NEW_STATE, PUMP_NEW_MODE } from './types';
import { EVENT_NEW_STATE, EVENT_NEW_MODE, COMMAND_SET_STATE, COMMAND_SET_MODE, PUMP_SOCKET_NAMESPACE } from '../config/Api';

const socket = io(PUMP_SOCKET_NAMESPACE);

export const init = store => {
  socket.on(EVENT_NEW_STATE, state => {
    store.dispatch({ type: PUMP_NEW_STATE, state });
  });
  socket.on(EVENT_NEW_MODE, mode => {
    store.dispatch({ type: PUMP_NEW_MODE, mode });
  })
};

export const setState = ({ state }) => dispatch => {
  socket.emit(COMMAND_SET_STATE, state);
};

export const setMode = ({ mode }) => dispatch => {
  socket.emit(COMMAND_SET_MODE, mode);
};
