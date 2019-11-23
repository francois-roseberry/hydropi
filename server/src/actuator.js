const EVENT_NEW_STATE = require('./api').EVENT_NEW_STATE;
const EVENT_NEW_MODE = require('./api').EVENT_NEW_MODE;
const COMMAND_SET_STATE = require('./api').COMMAND_SET_STATE;
const COMMAND_SET_MODE = require('./api').COMMAND_SET_MODE;
const INITIAL_ACTUATOR_STATE = require('./api').INITIAL_ACTUATOR_STATE;
const INITIAL_ACTUATOR_MODE = require('./api').INITIAL_ACTUATOR_MODE;
const ON_DEVICE = require('./config').ON_DEVICE;

const States = require('./states');
const Modes = require('./modes');

const actuator = io => (socketNamespace, name, pinNumber) => {
  let pin;
  let websocket = null;
  let stateObj = { state: INITIAL_ACTUATOR_STATE, mode: INITIAL_ACTUATOR_MODE };
  const namespace = io.of(socketNamespace);

  if (ON_DEVICE) {
    pin = require("pi-pins").connect(pinNumber);
    pin.mode('out');
    console.log('On device, connecting to gpio', pinNumber);
  }

  const setState = state => {
    console.log('Setting state to ', state);
    stateObj.state = state;
    if (ON_DEVICE) {
      const signal = stateObj.state === States.ON ? true : false;
      console.log('On device, setting gpio', pinNumber, 'to', signal);
      pin.value(signal);
    } else {
      console.log('Not on device, doing nothing');
    }

    if (websocket != null) {
      console.log('Sending new', name, 'state :', stateObj.state);
      namespace.emit(EVENT_NEW_STATE, stateObj.state);
    }
  }

  namespace.on('connection', socket => {
    websocket = socket;
    console.log('Sending initial', name, 'state :', stateObj.state);
  	socket.emit(EVENT_NEW_STATE, stateObj.state);
    console.log('Sending initial', name, 'mode :', stateObj.mode);
    socket.emit(EVENT_NEW_MODE, stateObj.mode);
    socket.on(COMMAND_SET_STATE, state => {
      setState(state);
    });
    socket.on(COMMAND_SET_MODE, mode => {
      stateObj.mode = mode;
      console.log('Sending new', name, 'mode :', stateObj.mode);
      namespace.emit(EVENT_NEW_MODE, stateObj.mode);
    });
  });

  return {
    activate: () => {
      setState(States.ON);
    },
    deactivate: () => {
      setState(States.OFF);
    }
  };
};

module.exports = actuator;
