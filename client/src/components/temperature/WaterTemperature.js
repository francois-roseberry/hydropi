import React from 'react';

import ChartControl from '../../containers/control/ChartControl';
import { selectData } from '../../selectors/waterTemperature';

export default class WaterTemperature extends React.Component {
  render() {
    return <ChartControl selectData={ selectData } title="control.temperature.water.title" />;
  }
}
