import io from 'socket.io-client';
import { AIR_TEMPERATURE_NEW_READING } from './types';
import { EVENT_NEW_READING, AIR_TEMPERATURE_SOCKET_NAMESPACE } from '../config/Api';

const socket = io(AIR_TEMPERATURE_SOCKET_NAMESPACE);

export const init = store => {
  socket.on(EVENT_NEW_READING, reading => {
    store.dispatch({ type: AIR_TEMPERATURE_NEW_READING, reading });
  });
};
