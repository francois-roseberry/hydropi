const PORT = require('./src/config').PORT;
const server = require('./src/server');

server.listen(PORT, () => {
	console.log('Hydropi server listening on port ' + PORT);
});
