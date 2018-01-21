import React from 'react';

import ActuatorControl from '../../containers/actuator/ActuatorControl';
import { setState, setMode } from '../../actions/actuator';
import { createActuatorSelector } from '../../selectors/actuator';
import { selectPumpSocket } from '../../selectors/socket';

export default class Pump extends React.Component {
  render() {
    return (<ActuatorControl
      selector={ createActuatorSelector('pump') }
      selectSocket={ selectPumpSocket }
      setState={ setState } setMode={ setMode }
      title="control.pump.water.title" />);
  }
}
