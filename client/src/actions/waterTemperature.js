import io from 'socket.io-client';
import { WATER_TEMPERATURE_NEW_READING } from './types';
import { EVENT_NEW_READING, WATER_TEMPERATURE_SOCKET_NAMESPACE } from '../config/Api';

const socket = io(WATER_TEMPERATURE_SOCKET_NAMESPACE);

export const init = store => {
  socket.on(EVENT_NEW_READING, reading => {
    store.dispatch({ type: WATER_TEMPERATURE_NEW_READING, reading });
  });
};
