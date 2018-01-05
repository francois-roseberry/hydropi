import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ToggleControl from '../../components/control/ToggleControl';
import { selectIsActivated } from '../../selectors/ventilation';

class Ventilation extends React.Component {
  render() {
    return <ToggleControl title="control.ventilation.title" value={ this.props.isActivated } />;
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
