import React from 'react';

import SensorControl from '../../containers/sensor/SensorControl';
import { createSensorSelector } from '../../selectors/sensor';

export default class AirTemperature extends React.Component {
  render() {
    return <SensorControl selectData={ createSensorSelector('airTemperature').selectData } title="control.temperature.air.title" />;
  }
}
