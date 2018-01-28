const io = require('socket.io-client');
const server = require('../src/server');
const LIGHTING_SOCKET_NAMESPACE = require('../src/api').LIGHTING_SOCKET_NAMESPACE;

const options = {
  transports: ['websocket'],
  'force new connection': true
};
const url = 'http://localhost:5000' + LIGHTING_SOCKET_NAMESPACE;

describe('Server', () => {
  before(done => {
    server.listen(5000, done);
  });

  it('opens a socket for the lighting', done => {
    const client = io.connect(url, options);
    client.on('state', state => {
      console.log('Received state from actuator');
      client.disconnect();
      done();
    });
  });

  after(done => {
    server.close(done);
  });
});
