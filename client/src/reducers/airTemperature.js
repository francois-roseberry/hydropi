import { AIR_TEMPERATURE_NEW_READING } from '../actions/types';

export const airTemperatureReducer = (state = INITIAL_AIR_TEMPERATURE_STATE, action = {}) => {
  switch (action.type) {
    case AIR_TEMPERATURE_NEW_READING:
      return { ...state, data: appendReading(state.data, action.reading) };
    default:
      return state;
  }
}

const appendReading = (data, reading) => {
  let newData = data.concat([reading]);
  newData = newData.slice(Math.max(newData.length - 4, 0));
  return newData;
}

const INITIAL_AIR_TEMPERATURE_STATE = { data: [] };
