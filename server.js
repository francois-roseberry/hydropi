const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = 3001;
const AIR_TEMPERATURE_SOCKET_NAMESPACE = '/airTemperature';
const EVENT_NEW_READING = 'data';

app.use(express.static('client/build'));

const airTemperatureNamespace = io.of(AIR_TEMPERATURE_SOCKET_NAMESPACE);
airTemperatureNamespace.on('connection', () => {
  // Send random temperature data at regular intervals
  let seconds = 1;
  setInterval(() => {
    airTemperatureNamespace.emit(EVENT_NEW_READING, { x: seconds, y: Math.random() * 10 + 20 });
    seconds++;
  }, 1000);
});

http.listen(PORT, () => {
	console.log('Hydropi server listening on port ' + PORT);
});
