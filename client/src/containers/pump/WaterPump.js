import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ActuatorControl from '../../components/control/ActuatorControl';
import { selectIsActivated } from '../../selectors/pump';

class WaterPump extends React.Component {
  render() {
    return <ActuatorControl title="control.pump.water.title" value={ this.props.isActivated } />;
  }
}

WaterPump.propTypes = {
  isActivated: PropTypes.bool.isRequired
}

WaterPump.defaultProps = {
  isActivated: false
}

export const mapStateToProps = state => ({
  isActivated: selectIsActivated(state)
});

export { WaterPump };
export default connect(mapStateToProps, null)(WaterPump);
