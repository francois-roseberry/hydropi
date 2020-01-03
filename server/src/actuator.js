const EVENT_NEW_STATE = require('./api').EVENT_NEW_STATE;
const EVENT_NEW_MODE = require('./api').EVENT_NEW_MODE;
const COMMAND_SET_STATE = require('./api').COMMAND_SET_STATE;
const COMMAND_SET_MODE = require('./api').COMMAND_SET_MODE;
const INITIAL_ACTUATOR_STATE = require('./api').INITIAL_ACTUATOR_STATE;
const INITIAL_ACTUATOR_MODE = require('./api').INITIAL_ACTUATOR_MODE;
const ON_DEVICE = require('./config').ON_DEVICE;
const log = require('debug')('hydropi');
const schedule = require('node-schedule');
const moment = require('moment');

const States = require('./states');
const Modes = require('./modes');

const actuator = io => (socketNamespace, name, pinNumber) => {
  let pin;
  let websocket = null;
  let activatingJob = null;
  let deactivatingJob = null;
  let stateObj = { state: INITIAL_ACTUATOR_STATE, mode: INITIAL_ACTUATOR_MODE };
  const namespace = io.of(socketNamespace);

  if (ON_DEVICE) {
    pin = require("pi-pins").connect(pinNumber);
    pin.mode('out');
    log('On device, connecting to gpio', pinNumber);
  }

  const setState = state => {
    log('Setting state to ', state);
    stateObj.state = state;
    if (ON_DEVICE) {
      const signal = stateObj.state === States.ON ? true : false;
      log('On device, setting gpio', pinNumber, 'to', signal);
      pin.value(signal);
    } else {
      log('Not on device, doing nothing');
    }

    if (websocket != null) {
      log('Sending new', name, 'state :', stateObj.state);
      websocket.emit(EVENT_NEW_STATE, stateObj.state);
    }
  }

  const setMode = mode => {
    log('Setting mode to ', mode);
    stateObj.mode = mode;
    if (stateObj.mode === Modes.AUTOMATIC) {
      log('Scheduling jobs to turn lights on at 6 and off at 22');
      activatingJob = schedule.scheduleJob('* 6 * * *', () => {
        log('Turning on light at hour 6');
        log('Time is ' + moment().format('H:mm:ss'));
        setState(States.ON);
      });
      
      deactivatingJob = schedule.scheduleJob('* 22 * * *', () => {
        log('Turning off light at hour 22');
        log('Time is ' + moment().format('H:mm:ss'));
        setState(States.OFF);
      });
    }
    else {
      log('Unscheduling jobs to turn on and off lights');
      if (activatingJob != null) {
        activatingJob.cancel();
        activatingJob = null;
      }
      if (deactivatingJob != null) {
        deactivatingJob.cancel();
        deactivatingJob = null;
      }
    }

    if (websocket != null) {
      log('Sending new', name, 'mode :', stateObj.mode);
      websocket.emit(EVENT_NEW_MODE, stateObj.mode);
    }
  }

  namespace.on('connection', socket => {
    websocket = socket;
    log('Sending initial', name, 'state :', stateObj.state);
  	socket.emit(EVENT_NEW_STATE, stateObj.state);
    log('Sending initial', name, 'mode :', stateObj.mode);
    socket.emit(EVENT_NEW_MODE, stateObj.mode);

    socket.on(COMMAND_SET_STATE, state => {
      setState(state);
    });
    socket.on(COMMAND_SET_MODE, mode => {
      setMode(mode);
    });
  });
};

module.exports = actuator;
