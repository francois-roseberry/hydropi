import React from 'react';

import ActuatorControl from '../../containers/actuator/ActuatorControl';
import { setState, setMode } from '../../actions/actuator';
import { createActuatorSelector } from '../../selectors/actuator';
import { selectVentilationSocket } from '../../selectors/socket';

export default class Ventilation extends React.Component {
  render() {
    return (<ActuatorControl
      selector={ createActuatorSelector('ventilation') }
      selectSocket={ selectVentilationSocket }
      setState={ setState } setMode={ setMode }
      title="control.ventilation.title" />);
  }
}
