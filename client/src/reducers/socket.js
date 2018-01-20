import { SET_LIGHTING_SOCKET, SET_VENTILATION_SOCKET, SET_PUMP_SOCKET,
  SET_WATER_TEMPERATURE_SOCKET, SET_AIR_TEMPERATURE_SOCKET, SET_HUMIDITY_SOCKET } from '../actions/types';

export const socketReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_LIGHTING_SOCKET:
      return { ...state, lighting: action.socket };
    case SET_VENTILATION_SOCKET:
      return { ...state, ventilation: action.socket };
    case SET_PUMP_SOCKET:
      return { ...state, pump: action.socket };
    case SET_WATER_TEMPERATURE_SOCKET:
      return { ...state, waterTemperature: action.socket };
    case SET_AIR_TEMPERATURE_SOCKET:
      return { ...state, airTemperature: action.socket };
    case SET_HUMIDITY_SOCKET:
      return { ...state, humidity: action.socket };
    default:
      return state;
  }
}

const INITIAL_STATE = { };
