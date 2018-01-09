import React from 'react';

import ActuatorControl from '../../containers/actuator/ActuatorControl';
import { selectIsActivated } from '../../selectors/ventilation';

export default class Ventilation extends React.Component {
  render() {
    return <ActuatorControl selectIsActivated={ selectIsActivated } title="control.ventilation.title" />;
  }
}
