import React from 'react';

import ActuatorControl from '../../containers/actuator/ActuatorControl';
import { setState } from '../../actions/pump';
import { selectIsActivated } from '../../selectors/pump';

export default class WaterPump extends React.Component {
  render() {
    return (<ActuatorControl
      selectIsActivated={ selectIsActivated }
      setState={ setState }
      title="control.pump.water.title" />);
  }
}
