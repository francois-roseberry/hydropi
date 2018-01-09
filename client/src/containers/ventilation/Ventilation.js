import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ActuatorControl from '../../components/control/ActuatorControl';
import { selectIsActivated } from '../../selectors/ventilation';

class Ventilation extends React.Component {
  render() {
    return <ActuatorControl title="control.ventilation.title" value={ this.props.isActivated } />;
  }
}

Ventilation.propTypes = {
  isActivated: PropTypes.bool.isRequired
}

Ventilation.defaultProps = {
  isActivated: false
}

export const mapStateToProps = state => ({
  isActivated: selectIsActivated(state)
});

export { Ventilation };
export default connect(mapStateToProps, null)(Ventilation);
