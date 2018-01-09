import { combineReducers } from 'redux';

import {
  AIR_TEMPERATURE_NEW_READING,
  WATER_TEMPERATURE_NEW_READING,
  HUMIDITY_NEW_READING } from '../actions/types';
import { createActuatorReducer } from './actuator';
import { createSensorReducer } from './sensor';

const rootReducer = combineReducers({
  ventilation: createActuatorReducer(),
  pump: createActuatorReducer(),
  lighting: createActuatorReducer(),
  humidity: createSensorReducer(HUMIDITY_NEW_READING),
  waterTemperature: createSensorReducer(WATER_TEMPERATURE_NEW_READING),
  airTemperature: createSensorReducer(AIR_TEMPERATURE_NEW_READING)
});

export default rootReducer;
