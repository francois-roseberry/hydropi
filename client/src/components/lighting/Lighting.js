import React from 'react';

import ActuatorControl from '../../containers/actuator/ActuatorControl';
import { setState, setMode } from '../../actions/lighting';
import { createActuatorSelector } from '../../selectors/actuator';

export default class Lighting extends React.Component {
  render() {
    return (<ActuatorControl
      selector={ createActuatorSelector('lighting') }
      setState={ setState } setMode={ setMode }
      title="control.lighting.title" />);
  }
}
