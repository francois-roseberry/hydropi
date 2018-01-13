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
const COMMAND_SET_STATE = 'state';

let lightingState = true;
let ventilationState = true;
let pumpState = true;

app.use(express.static('client/build'));

const airTemperatureNamespace = io.of(AIR_TEMPERATURE_SOCKET_NAMESPACE);
const waterTemperatureNamespace = io.of(WATER_TEMPERATURE_SOCKET_NAMESPACE);
const humidityNamespace = io.of(HUMIDITY_SOCKET_NAMESPACE);

const lightingNamespace = io.of(LIGHTING_SOCKET_NAMESPACE);
const ventilationNamespace = io.of(VENTILATION_SOCKET_NAMESPACE);
const pumpNamespace = io.of(PUMP_SOCKET_NAMESPACE);

// Send random air, water temperature and humidity data at regular intervals
let seconds = 1;
setInterval(() => {
  airTemperatureNamespace.emit(EVENT_NEW_READING, { x: seconds, y: Math.random() * 10 + 20 });
	waterTemperatureNamespace.emit(EVENT_NEW_READING, { x: seconds, y: Math.random() * 10 + 15 });
	humidityNamespace.emit(EVENT_NEW_READING, { x: seconds, y: Math.random() * 10 + 60 });
  seconds += 3;
}, 3000);

lightingNamespace.on('connection', socket => {
	socket.emit(EVENT_NEW_STATE, lightingState);
  socket.on(COMMAND_SET_STATE, state => {
    lightingState = state;
    console.log('Sending new lighting state : ', lightingState);
    socket.emit(EVENT_NEW_STATE, lightingState);
  });
});
ventilationNamespace.on('connection', socket => {
	socket.emit(EVENT_NEW_STATE, ventilationState);
  socket.on(COMMAND_SET_STATE, state => {
    ventilationState = state;
    console.log('Sending new ventilation state : ', ventilationState);
    socket.emit(EVENT_NEW_STATE, ventilationState);
  });
});
pumpNamespace.on('connection', socket => {
	socket.emit(EVENT_NEW_STATE, pumpState);
  socket.on(COMMAND_SET_STATE, state => {
    pumpState = state;
    console.log('Sending new pump state : ', pumpState);
    socket.emit(EVENT_NEW_STATE, pumpState);
  });
});

http.listen(PORT, () => {
	console.log('Hydropi server listening on port ' + PORT);
});
