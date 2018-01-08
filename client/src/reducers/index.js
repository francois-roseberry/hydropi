import { combineReducers } from 'redux';

import { ventilationReducer } from './ventilation';
import { pumpReducer } from './pump';
import { lightingReducer } from './lighting';
import {
  AIR_TEMPERATURE_NEW_READING,
  WATER_TEMPERATURE_NEW_READING,
  HUMIDITY_NEW_READING } from '../actions/types';
import { createSensorReducer } from './sensor';

const rootReducer = combineReducers({
  ventilation: ventilationReducer,
  pump: pumpReducer,
  lighting: lightingReducer,
  humidity: createSensorReducer(HUMIDITY_NEW_READING),
  waterTemperature: createSensorReducer(WATER_TEMPERATURE_NEW_READING),
  airTemperature: createSensorReducer(AIR_TEMPERATURE_NEW_READING)
});

export default rootReducer;
