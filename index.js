const express = require('express');
const app = express();
const http = require('http').Server(app);


app.get('/', (req, res) => {
  res.send('hello world');
});

http.listen(PORT, () => {
	log('Question game server listening on port ' + PORT);
});
