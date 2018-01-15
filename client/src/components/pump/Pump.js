import React from 'react';

import ActuatorControl from '../../containers/actuator/ActuatorControl';
import { setState, setMode } from '../../actions/pump';
import { createActuatorSelector } from '../../selectors/actuator';

export default class Pump extends React.Component {
  render() {
    return (<ActuatorControl
      selector={ createActuatorSelector('pump') }
      setState={ setState } setMode={ setMode }
      title="control.pump.water.title" />);
  }
}
