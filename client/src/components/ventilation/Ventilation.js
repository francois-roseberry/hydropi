import React from 'react';

import ActuatorControl from '../../containers/actuator/ActuatorControl';
import { setState } from '../../actions/ventilation';
import { createActuatorSelector } from '../../selectors/actuator';

export default class Ventilation extends React.Component {
  render() {
    return (<ActuatorControl
      selectIsActivated={ createActuatorSelector('ventilation').selectIsActivated }
      setState={ setState }
      title="control.ventilation.title" />);
  }
}
