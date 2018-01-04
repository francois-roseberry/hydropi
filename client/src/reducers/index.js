import { combineReducers } from 'redux';

import ventilationReducer from './ventilation';
import pumpReducer from './pump';
import lightingReducer from './lighting';

const rootReducer = combineReducers({
  ventilation: ventilationReducer,
  pump: pumpReducer,
  lighting: lightingReducer
});

export default rootReducer;
