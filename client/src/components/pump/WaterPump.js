import React from 'react';

import ActuatorControl from '../../containers/actuator/ActuatorControl';
import { selectIsActivated } from '../../selectors/pump';

export default class WaterPump extends React.Component {
  render() {
    return <ActuatorControl selectIsActivated={ selectIsActivated } title="control.pump.water.title" />;
  }
}
