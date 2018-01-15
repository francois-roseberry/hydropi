import React from 'react';

import SensorControl from '../../containers/sensor/SensorControl';
import { createSensorSelector } from '../../selectors/sensor';

export default class Humidity extends React.Component {
  render() {
    return <SensorControl selectData={ createSensorSelector('humidity').selectData } title="control.humidity.title" />;
  }
}
