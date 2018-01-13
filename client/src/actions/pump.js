import io from 'socket.io-client';
import { PUMP_NEW_STATE } from './types';
import { EVENT_NEW_STATE, COMMAND_SET_STATE, PUMP_SOCKET_NAMESPACE } from '../config/Api';

const socket = io(PUMP_SOCKET_NAMESPACE);

export const init = store => {
  socket.on(EVENT_NEW_STATE, ({ state }) => {
    store.dispatch({ type: PUMP_NEW_STATE, state });
  });
};

export const setState = state => dispatch => {
  socket.emit(COMMAND_SET_STATE, state);
};
