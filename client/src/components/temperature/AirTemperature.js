import React from 'react';

import ChartControl from '../../containers/control/ChartControl';
import { selectData } from '../../selectors/airTemperature';

export default class AirTemperature extends React.Component {
  render() {
    return <ChartControl selectData={ selectData } title="control.temperature.air.title" />;
  }
}
