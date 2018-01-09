import { combineReducers } from 'redux';

import {
  AIR_TEMPERATURE_NEW_READING,
  WATER_TEMPERATURE_NEW_READING,
  HUMIDITY_NEW_READING,
  LIGHTING_NEW_STATE,
  VENTILATION_NEW_STATE,
  PUMP_NEW_STATE } from '../actions/types';
import { createActuatorReducer } from './actuator';
import { createSensorReducer } from './sensor';

const rootReducer = combineReducers({
  ventilation: createActuatorReducer(VENTILATION_NEW_STATE),
  pump: createActuatorReducer(PUMP_NEW_STATE),
  lighting: createActuatorReducer(LIGHTING_NEW_STATE),
  humidity: createSensorReducer(HUMIDITY_NEW_READING),
  waterTemperature: createSensorReducer(WATER_TEMPERATURE_NEW_READING),
  airTemperature: createSensorReducer(AIR_TEMPERATURE_NEW_READING)
});

export default rootReducer;
