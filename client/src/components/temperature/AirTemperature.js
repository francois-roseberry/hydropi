import React from 'react';

import SensorControl from '../../containers/control/SensorControl';
import { selectData } from '../../selectors/airTemperature';

export default class AirTemperature extends React.Component {
  render() {
    return <SensorControl selectData={ selectData } title="control.temperature.air.title" />;
  }
}
