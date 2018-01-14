import React from 'react';

import SensorControl from '../../containers/sensor/SensorControl';
import { createSensorSelector } from '../../selectors/sensor';

export default class WaterTemperature extends React.Component {
  render() {
    return <SensorControl selectData={ createSensorSelector('waterTemperature').selectData } title="control.temperature.water.title" />;
  }
}
