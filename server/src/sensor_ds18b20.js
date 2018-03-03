const sensor = require('ds18x20');

const EVENT_NEW_READING = require('./api').EVENT_NEW_READING;
const ON_DEVICE = require('./config').ON_DEVICE;

const initSensor = () => {
  let sensorId = null;
  if (ON_DEVICE) {
    var isLoaded = sensor.isDriverLoaded();
    if (isLoaded) {
      console.log('on device, driver is loaded for ds18x20');
      const sensorIds = sensor.list();
      console.log('ds18x20 sensors connected :', sensorIds);
      console.log('skipping the first one');
      sensorId = sensorIds[1];
    } else {
      console.log('on device, driver is not loaded for ds18x20');
    }
  }

  return {
    read: () => {
      if (ON_DEVICE && !!sensorId) {
        const temp = sensor.get(sensorId);
        console.log('on device, read water temp from ds18b20 :', temp);
        return temp;
      }

      console.log('not on device, or no sensor connected, generating random temp');
      return Math.random() * 10 + 15;
    }
  };
};

module.exports = initSensor;
