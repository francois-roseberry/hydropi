import React from 'react';

import ActuatorControl from '../../containers/actuator/ActuatorControl';
import { setState, setMode } from '../../actions/actuator';
import { createActuatorSelector } from '../../selectors/actuator';
import { selectLightingSocket } from '../../selectors/socket';

export default class Lighting extends React.Component {
  render() {
    return (<ActuatorControl
      selector={ createActuatorSelector('lighting') }
      selectSocket={ selectLightingSocket }
      setState={ setState } setMode={ setMode }
      title="control.lighting.title" />);
  }
}
