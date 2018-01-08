const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = 3001;
const AIR_TEMPERATURE_SOCKET_NAMESPACE = '/airTemperature';
const WATER_TEMPERATURE_SOCKET_NAMESPACE = '/waterTemperature';
const HUMIDITY_SOCKET_NAMESPACE = '/humidity';
const EVENT_NEW_READING = 'data';

app.use(express.static('client/build'));

const airTemperatureNamespace = io.of(AIR_TEMPERATURE_SOCKET_NAMESPACE);
const waterTemperatureNamespace = io.of(WATER_TEMPERATURE_SOCKET_NAMESPACE);
const humidityNamespace = io.of(HUMIDITY_SOCKET_NAMESPACE);

// Send random air temperature data at regular intervals
let seconds = 1;
setInterval(() => {
  airTemperatureNamespace.emit(EVENT_NEW_READING, { x: seconds, y: Math.random() * 10 + 20 });
	waterTemperatureNamespace.emit(EVENT_NEW_READING, { x: seconds, y: Math.random() * 10 + 15 });
	humidityNamespace.emit(EVENT_NEW_READING, { x: seconds, y: Math.random() * 10 + 60 });
  seconds++;
}, 1000);

http.listen(PORT, () => {
	console.log('Hydropi server listening on port ' + PORT);
});
