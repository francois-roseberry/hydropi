import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reducers from './reducers';

import { init as initAirTemperatureSocket } from './actions/airTemperature.js';
import { init as initWaterTemperatureSocket } from './actions/waterTemperature.js';
import { init as initHumiditySocket } from './actions/humidity.js';

import { init as initLightingSocket } from './actions/lighting.js';
import { init as initVentilationSocket } from './actions/ventilation.js';
import { init as initPumpSocket } from './actions/pump.js';

const configureStore = () => {
  const appliedMiddleware = applyMiddleware(thunkMiddleware);
  const store = createStore(reducers, appliedMiddleware);
  initAirTemperatureSocket(store);
  initWaterTemperatureSocket(store);
  initHumiditySocket(store);
  initLightingSocket(store);
  initVentilationSocket(store);
  initPumpSocket(store);
  return store;
};

ReactDOM.render(
  <Provider store={ configureStore() }>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
