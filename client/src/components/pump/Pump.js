import React from 'react';

import ActuatorControl from '../../containers/actuator/ActuatorControl';
import { setState } from '../../actions/pump';
import { createActuatorSelector } from '../../selectors/actuator';

export default class Pump extends React.Component {
  render() {
    return (<ActuatorControl
      selectIsActivated={ createActuatorSelector('pump').selectIsActivated }
      setState={ setState }
      title="control.pump.water.title" />);
  }
}
