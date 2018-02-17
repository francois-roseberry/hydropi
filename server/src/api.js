const States = require('./states');
const Modes = require('./modes');

exports.EVENT_NEW_READING = 'data';

exports.AIR_TEMPERATURE_SOCKET_NAMESPACE = '/airTemperature';
exports.WATER_TEMPERATURE_SOCKET_NAMESPACE = '/waterTemperature';
exports.HUMIDITY_SOCKET_NAMESPACE = '/humidity';

exports.EVENT_NEW_STATE = 'state';
exports.EVENT_NEW_MODE = 'mode';
exports.COMMAND_SET_STATE = 'state';
exports.COMMAND_SET_MODE = 'mode';

exports.LIGHTING_SOCKET_NAMESPACE = '/lighting';
exports.VENTILATION_SOCKET_NAMESPACE = '/ventilation';
exports.PUMP_SOCKET_NAMESPACE = '/pump';

exports.INITIAL_ACTUATOR_STATE = States.OFF;
exports.INITIAL_ACTUATOR_MODE = Modes.MANUAL;
