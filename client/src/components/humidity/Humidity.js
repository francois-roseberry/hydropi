import React from 'react';

import ChartControl from '../../containers/control/ChartControl';
import { selectData } from '../../selectors/humidity';

export default class Humidity extends React.Component {
  render() {
    return <ChartControl selectData={ selectData } title="control.humidity.title" />;
  }
}
