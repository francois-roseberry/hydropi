import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reducers from './reducers';
import { init as initAirTemperatureSocket } from './actions/airTemperature.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);
initAirTemperatureSocket(store);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
