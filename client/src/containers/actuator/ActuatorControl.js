import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toggle from 'react-toggle-button';
import { bindAll } from 'lodash';

import Control from '../../components/control/Control';

import './ActuatorControl.css';

class ActuatorControl extends React.Component {
  constructor(props) {
    super(props);

    bindAll(this, ['onToggle']);
  }

  onToggle() {
    this.props.setState({ state: !this.props.value });
  }

  render() {
    return (
      <Control title={ this.props.title }>
        <div className="toggle-wrapper">
          <Toggle value={ this.props.value } onToggle={ this.onToggle } />
        </div>
      </Control>
    );
  }
}

ActuatorControl.propTypes = {
  selectIsActivated: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.bool
};

ActuatorControl.defaultProps = {
  value: false
};

export const mapStateToProps = (state, props) => ({
  value: props.selectIsActivated(state)
});

export const mapDispatchToProps = (dispatch, props) => ({
  setState: (...args) => dispatch(props.setState(...args))
});

export { ActuatorControl };
export default connect(mapStateToProps, mapDispatchToProps)(ActuatorControl);
