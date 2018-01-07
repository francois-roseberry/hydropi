import { combineReducers } from 'redux';

import { ventilationReducer } from './ventilation';
import { pumpReducer } from './pump';
import { lightingReducer } from './lighting';
import { humidityReducer } from './humidity';
import { waterTemperatureReducer } from './waterTemperature';
import { airTemperatureReducer } from './airTemperature';

const rootReducer = combineReducers({
  ventilation: ventilationReducer,
  pump: pumpReducer,
  lighting: lightingReducer,
  humidity: humidityReducer,
  waterTemperature: waterTemperatureReducer,
  airTemperature: airTemperatureReducer
});

export default rootReducer;
