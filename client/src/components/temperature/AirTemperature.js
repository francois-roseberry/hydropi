import React from 'react';

import SensorControl from '../../containers/sensor/SensorControl';
import { selectData } from '../../selectors/airTemperature';

export default class AirTemperature extends React.Component {
  render() {
    return <SensorControl selectData={ selectData } title="control.temperature.air.title" />;
  }
}
