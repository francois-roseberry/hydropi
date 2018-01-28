const EVENT_NEW_STATE = require('./api').EVENT_NEW_STATE;
const EVENT_NEW_MODE = require('./api').EVENT_NEW_MODE;
const COMMAND_SET_STATE = require('./api').COMMAND_SET_STATE;
const COMMAND_SET_MODE = require('./api').COMMAND_SET_MODE;
const ON_DEVICE = require('./config').ON_DEVICE;

const States = require('./states');
const Modes = require('./modes');

const actuator = io => (socketNamespace, name, pinNumber) => {
  const namespace = io.of(socketNamespace);

  let stateObj = { state: States.OFF, mode: Modes.MANUAL };
  namespace.on('connection', socket => {
    console.log('Sending initial', name, 'state :', stateObj.state);
  	socket.emit(EVENT_NEW_STATE, stateObj.state);
    console.log('Sending initial', name, 'mode :', stateObj.mode);
    socket.emit(EVENT_NEW_MODE, stateObj.mode);
    socket.on(COMMAND_SET_STATE, state => {
      stateObj.state = state;
      if (ON_DEVICE) {
        var pin = require("pi-pins").connect(pinNumber);
        const signal = state === States.ON ? 'high' : 'low';
        console.log('On device, setting pin', pinNumber, 'to', signal);
        pin.mode(signal);
      } else {
        console.log('Not on device, doing nothing');
      }
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
