import React from 'react';

import SensorControl from '../../containers/sensor/SensorControl';
import { selectData } from '../../selectors/humidity';

export default class Humidity extends React.Component {
  render() {
    return <SensorControl selectData={ selectData } title="control.humidity.title" />;
  }
}
