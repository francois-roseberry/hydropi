import React from 'react';

import ActuatorControl from '../../containers/actuator/ActuatorControl';
import { selectIsActivated } from '../../selectors/lighting';

export default class Lighting extends React.Component {
  render() {
    return <ActuatorControl selectIsActivated={ selectIsActivated } title="control.lighting.title" />;
  }
}
