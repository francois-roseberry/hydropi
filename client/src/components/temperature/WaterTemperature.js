import React from 'react';

import SensorControl from '../../containers/control/SensorControl';
import { selectData } from '../../selectors/waterTemperature';

export default class WaterTemperature extends React.Component {
  render() {
    return <SensorControl selectData={ selectData } title="control.temperature.water.title" />;
  }
}
