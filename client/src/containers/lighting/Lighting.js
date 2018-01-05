import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ToggleControl from '../../components/control/ToggleControl';
import { selectIsActivated } from '../../selectors/lighting';

class Lighting extends React.Component {
  render() {
    return <ToggleControl title="control.lighting.title" value={ this.props.isActivated } />;
  }
}

Lighting.propTypes = {
  isActivated: PropTypes.bool.isRequired
}

Lighting.defaultProps = {
  isActivated: false
}

export const mapStateToProps = state => ({
  isActivated: selectIsActivated(state)
});

export { Lighting };
export default connect(mapStateToProps, null)(Lighting);
