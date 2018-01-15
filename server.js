const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = 3001;
const AIR_TEMPERATURE_SOCKET_NAMESPACE = '/airTemperature';
const WATER_TEMPERATURE_SOCKET_NAMESPACE = '/waterTemperature';
const HUMIDITY_SOCKET_NAMESPACE = '/humidity';
const EVENT_NEW_READING = 'data';

const LIGHTING_SOCKET_NAMESPACE = '/lighting';
const VENTILATION_SOCKET_NAMESPACE = '/ventilation';
const PUMP_SOCKET_NAMESPACE = '/pump';
const EVENT_NEW_STATE = 'state';
const EVENT_NEW_MODE = 'mode';
const COMMAND_SET_STATE = 'state';
const COMMAND_SET_MODE = 'mode';

const Modes = {
  AUTOMATIC: 'automatic',
  MANUAL: 'manual'
};

app.use(express.static('client/build'));

const airTemperatureNamespace = io.of(AIR_TEMPERATURE_SOCKET_NAMESPACE);
const waterTemperatureNamespace = io.of(WATER_TEMPERATURE_SOCKET_NAMESPACE);
const humidityNamespace = io.of(HUMIDITY_SOCKET_NAMESPACE);

// Send random air, water temperature and humidity data at regular intervals
let seconds = 0;
setInterval(() => {
  airTemperatureNamespace.emit(EVENT_NEW_READING, { x: seconds, y: Math.random() * 10 + 20 });
	waterTemperatureNamespace.emit(EVENT_NEW_READING, { x: seconds, y: Math.random() * 10 + 15 });
	humidityNamespace.emit(EVENT_NEW_READING, { x: seconds, y: Math.random() * 10 + 60 });
  seconds += 2;
}, 2000);

const actuator = (socketNamespace, name) => {
  const namespace = io.of(socketNamespace);
  let stateObj = { state: true, mode: Modes.AUTOMATIC };
  namespace.on('connection', socket => {
    console.log('Sending initial', name, 'state :', stateObj.state);
  	socket.emit(EVENT_NEW_STATE, stateObj.state);
    console.log('Sending initial', name, 'mode :', stateObj.mode);
    socket.emit(EVENT_NEW_MODE, stateObj.mode);
    socket.on(COMMAND_SET_STATE, state => {
      stateObj.state = state;
      console.log('Sending new', name, 'state :', stateObj.state);
      namespace.emit(EVENT_NEW_STATE, stateObj.state);
    });
    socket.on(COMMAND_SET_MODE, mode => {
      stateObj.mode = mode;
      console.log('Sending new', name, 'mode :', stateObj.mode);
      namespace.emit(EVENT_NEW_MODE, stateObj.mode);
    });
  });
};

actuator(LIGHTING_SOCKET_NAMESPACE, 'lighting');
actuator(VENTILATION_SOCKET_NAMESPACE, 'ventilation');
actuator(PUMP_SOCKET_NAMESPACE, 'pump');

http.listen(PORT, () => {
	console.log('Hydropi server listening on port ' + PORT);
});
