const express = require('express');
const app = express();
const http = require('http').Server(app);


app.use(express.static('client/build'));

const PORT = 3000;

http.listen(PORT, () => {
	console.log('Hydropi server listening on port ' + PORT);
});
