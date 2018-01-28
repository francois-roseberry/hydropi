const EVENT_NEW_STATE = require('./api').EVENT_NEW_STATE;
const EVENT_NEW_MODE = require('./api').EVENT_NEW_MODE;
const COMMAND_SET_STATE = require('./api').COMMAND_SET_STATE;
const COMMAND_SET_MODE = require('./api').COMMAND_SET_MODE;

const States = require('./states');
const Modes = require('./modes');

const actuator = io => (socketNamespace, name) => {
  const namespace = io.of(socketNamespace);
  let stateObj = { state: States.ON, mode: Modes.MANUAL };
  namespace.on('connection', socket => {
    console.log('Sending initial', name, 'state :', stateObj.state);
  	socket.emit(EVENT_NEW_STATE, stateObj.state);
    console.log('Sending initial', name, 'mode :', stateObj.mode);
    socket.emit(EVENT_NEW_MODE, stateObj.mode);
    socket.on(COMMAND_SET_STATE, state => {
      stateObj.state = state;
      console.log('Sending new', name, 'state :', stateObj.state);
      namespace.emit(EVENT_NEW_STATE, stateObj.state);
    });
    socket.on(COMMAND_SET_MODE, mode => {
      stateObj.mode = mode;
      console.log('Sending new', name, 'mode :', stateObj.mode);
      namespace.emit(EVENT_NEW_MODE, stateObj.mode);
    });
  });
};

module.exports = actuator;
