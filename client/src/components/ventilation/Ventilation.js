import React from 'react';

import ActuatorControl from '../../containers/actuator/ActuatorControl';
import { setState, setMode } from '../../actions/ventilation';
import { createActuatorSelector } from '../../selectors/actuator';

export default class Ventilation extends React.Component {
  render() {
    return (<ActuatorControl
      selector={ createActuatorSelector('ventilation') }
      setState={ setState } setMode={ setMode }
      title="control.ventilation.title" />);
  }
}
