import React from 'react';

import ActuatorControl from '../../containers/actuator/ActuatorControl';
import { setState } from '../../actions/lighting';
import { createActuatorSelector } from '../../selectors/actuator';

export default class Lighting extends React.Component {
  render() {
    return (<ActuatorControl
      selectIsActivated={ createActuatorSelector('lighting').selectIsActivated }
      setState={ setState }
      title="control.lighting.title" />);
  }
}
