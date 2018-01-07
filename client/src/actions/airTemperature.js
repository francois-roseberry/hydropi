import io from 'socket.io-client';
import { AIR_TEMPERATURE_NEW_READING } from './types';

const socket = io();

export const init = store => {
  socket.on('data', reading => {
    store.dispatch({ type: AIR_TEMPERATURE_NEW_READING, reading });
  });
};
