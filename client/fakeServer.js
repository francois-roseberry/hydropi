const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = 3001;

io.on('connection', () => {
  console.log('client connected to server');
  // Send random temperature data at regular intervals
  let seconds = 1;
  setInterval(() => {
    io.emit('data', { x: seconds, y: Math.random() * 10 + 20 });
    seconds++;
  }, 1000);
});

http.listen(PORT, () => {
	console.log('Fake server listening on port', PORT);
});
