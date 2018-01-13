import React from 'react';

import ActuatorControl from '../../containers/actuator/ActuatorControl';
import { setState } from '../../actions/ventilation';
import { selectIsActivated } from '../../selectors/ventilation';

export default class Ventilation extends React.Component {
  render() {
    return (<ActuatorControl
      selectIsActivated={ selectIsActivated }
      setState={ setState }
      title="control.ventilation.title" />);
  }
}
