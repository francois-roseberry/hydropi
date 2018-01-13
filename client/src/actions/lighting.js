import io from 'socket.io-client';
import { LIGHTING_NEW_STATE } from './types';
import { EVENT_NEW_STATE, COMMAND_SET_STATE, LIGHTING_SOCKET_NAMESPACE } from '../config/Api';

const socket = io(LIGHTING_SOCKET_NAMESPACE);

export const init = store => {
  socket.on(EVENT_NEW_STATE, ({ state }) => {
    store.dispatch({ type: LIGHTING_NEW_STATE, state });
  });
};

export const setState = state => dispatch => {
  socket.emit(COMMAND_SET_STATE, state);
};
