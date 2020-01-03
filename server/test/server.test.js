const io = require('socket.io-client');
const server = require('../src/server');
const expect = require('chai').expect;
const LIGHTING_SOCKET_NAMESPACE = require('../src/api').LIGHTING_SOCKET_NAMESPACE;
const PUMP_SOCKET_NAMESPACE = require('../src/api').PUMP_SOCKET_NAMESPACE;
const VENTILATION_SOCKET_NAMESPACE = require('../src/api').VENTILATION_SOCKET_NAMESPACE;
const HUMIDITY_SOCKET_NAMESPACE = require('../src/api').HUMIDITY_SOCKET_NAMESPACE;
const AIR_TEMPERATURE_SOCKET_NAMESPACE = require('../src/api').AIR_TEMPERATURE_SOCKET_NAMESPACE;
const WATER_TEMPERATURE_SOCKET_NAMESPACE = require('../src/api').WATER_TEMPERATURE_SOCKET_NAMESPACE;
const EVENT_NEW_STATE = require('../src/api').EVENT_NEW_STATE;
const EVENT_NEW_MODE = require('../src/api').EVENT_NEW_MODE;
const EVENT_NEW_READING = require('../src/api').EVENT_NEW_READING;
const INITIAL_ACTUATOR_STATE = require('../src/api').INITIAL_ACTUATOR_STATE;
const INITIAL_ACTUATOR_MODE = require('../src/api').INITIAL_ACTUATOR_MODE;

const options = {
  transports: ['websocket'],
  'force new connection': true
};
const url = 'http://localhost:5000';

const actuatorTest = socketNamespace => () => {
  let client, currentState, currentMode;

  before(done => {
    client = io.connect(url + socketNamespace, options);
    client.on(EVENT_NEW_STATE, state => {
      console.log('New state received:', state);
      currentState = state;
    });
    client.on(EVENT_NEW_MODE, mode => {
      console.log('New mode received:', mode);
      currentMode = mode;
    });
    setTimeout(done, 20);
  });

  it('send the initial state', () => {
    expect(currentState).to.eql(INITIAL_ACTUATOR_STATE);
  });

  it('send the initial mode', () => {
    expect(currentMode).to.eql(INITIAL_ACTUATOR_MODE);
  });

  describe('when setting new state', () => {
    before(() => {
      client.emit('state', 'on');
    });

    it('receives back the new state', () => {
      expect(currentState).to.eql('on');
    });
  });

  describe('when setting new mode', () => {
    before(() => {
      client.emit('mode', 'automatic');
    });

    it('receives back the new mode', () => {
      expect(currentMode).to.eql('automatic');
    });
  });

  after(() => {
    client.disconnect();
  });
};

describe('Server', () => {
  before(done => {
    server.listen(5000, done);
  });

  describe('when opening a socket for the lighting', actuatorTest(LIGHTING_SOCKET_NAMESPACE));
  describe('when opening a socket for the water pump', actuatorTest(PUMP_SOCKET_NAMESPACE));
  describe('when opening a socket for the ventilation', actuatorTest(VENTILATION_SOCKET_NAMESPACE));

  it('opens a socket for the humidity', done => {
    const client = io.connect(url + HUMIDITY_SOCKET_NAMESPACE, options);
    client.on(EVENT_NEW_READING, reading => {
      client.disconnect();
      done();
    });
  });

  it('opens a socket for the air temperature', done => {
    const client = io.connect(url + AIR_TEMPERATURE_SOCKET_NAMESPACE, options);
    client.on(EVENT_NEW_READING, reading => {
      client.disconnect();
      done();
    });
  });

  it('opens a socket for the water temperature', done => {
    const client = io.connect(url + WATER_TEMPERATURE_SOCKET_NAMESPACE, options);
    client.on(EVENT_NEW_READING, reading => {
      client.disconnect();
      done();
    });
  });

  after(done => {
    server.close(done);
  });
});
