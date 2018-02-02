const process = require('process');

exports.PORT = 3001;

exports.ON_DEVICE = process.env.RESIN === "1";

exports.LIGHTING_PIN = 12;
exports.VENTILATION_PIN = 16;
exports.PUMP_PIN = 26;
