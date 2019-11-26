const sensor = require('ds18x20');
const log = require('debug')('hydropi');

const EVENT_NEW_READING = require('./api').EVENT_NEW_READING;
const ON_DEVICE = require('./config').ON_DEVICE;

const initSensor = () => {
  let sensorId = null;
  if (ON_DEVICE) {
    var isLoaded = sensor.isDriverLoaded();
    if (isLoaded) {
      log('on device, driver is loaded for ds18x20');
      const sensorIds = sensor.list();
      log('ds18x20 sensors connected :', sensorIds);
      log('skipping the first one');
      sensorId = sensorIds[1];
    } else {
      log('on device, driver is not loaded for ds18x20');
    }
  }

  return {
    read: () => {
      if (ON_DEVICE && !!sensorId) {
        const temp = sensor.get(sensorId);
        log('on device, read water temp from ds18b20 :', temp);
        return temp;
      }

      log('not on device, or no sensor connected, generating random temp');
      return Math.random() * 10 + 15;
    }
  };
};

module.exports = initSensor;
