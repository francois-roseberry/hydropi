import React from 'react';

import ActuatorControl from '../../containers/actuator/ActuatorControl';
import { setState } from '../../actions/lighting';
import { selectIsActivated } from '../../selectors/lighting';

export default class Lighting extends React.Component {
  render() {
    return (<ActuatorControl
      selectIsActivated={ selectIsActivated }
      setState={ setState }
      title="control.lighting.title" />);
  }
}
