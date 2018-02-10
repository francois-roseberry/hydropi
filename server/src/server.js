const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const actuator = require('./actuator')(io);

const PORT = require('./config').PORT;
const AIR_TEMPERATURE_SOCKET_NAMESPACE = '/airTemperature';
const WATER_TEMPERATURE_SOCKET_NAMESPACE = '/waterTemperature';
const HUMIDITY_SOCKET_NAMESPACE = '/humidity';
const EVENT_NEW_READING = require('./api').EVENT_NEW_READING;

const LIGHTING_SOCKET_NAMESPACE = '/lighting';
const VENTILATION_SOCKET_NAMESPACE = '/ventilation';
const PUMP_SOCKET_NAMESPACE = '/pump';
const LIGHTING_PIN = require('./config').LIGHTING_PIN;
const VENTILATION_PIN = require('./config').VENTILATION_PIN;
const PUMP_PIN = require('./config').PUMP_PIN;

const airTemperatureNamespace = io.of(AIR_TEMPERATURE_SOCKET_NAMESPACE);
const waterTemperatureNamespace = io.of(WATER_TEMPERATURE_SOCKET_NAMESPACE);
const humidityNamespace = io.of(HUMIDITY_SOCKET_NAMESPACE);

// Send random air, water temperature and humidity data at regular intervals
let seconds = 0;
setInterval(() => {
  airTemperatureNamespace.emit(EVENT_NEW_READING, { x: seconds, y: Math.random() * 10 + 20 });
	waterTemperatureNamespace.emit(EVENT_NEW_READING, { x: seconds, y: Math.random() * 10 + 15 });
	humidityNamespace.emit(EVENT_NEW_READING, { x: seconds, y: Math.random() * 10 + 60 });
  seconds += 1;
}, 1000);

actuator(LIGHTING_SOCKET_NAMESPACE, 'lighting', LIGHTING_PIN);
actuator(VENTILATION_SOCKET_NAMESPACE, 'ventilation', VENTILATION_PIN);
actuator(PUMP_SOCKET_NAMESPACE, 'pump', PUMP_PIN);

app.use(express.static('../client/build'));

module.exports = http;
