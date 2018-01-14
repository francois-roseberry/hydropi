import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toggle from 'react-toggle-button';
import { bindAll } from 'lodash';

import Control from '../../components/control/Control';
import ModeToggle from '../../components/actuator/ModeToggle';
import { Modes } from '../../components/actuator/modes';

import './ActuatorControl.css';

class ActuatorControl extends React.Component {
  constructor(props) {
    super(props);

    bindAll(this, ['onStateToggle', 'onModeToggle']);
  }

  onModeToggle() {}

  onStateToggle() {
    this.props.setState({ state: !this.props.value });
  }

  render() {
    return (
      <Control title={ this.props.title }>
        <ModeToggle mode={ this.props.mode } onToggle={this.onModeToggle } />
        <div className="toggle-wrapper state">
          <Toggle value={ this.props.value } onToggle={ this.onStateToggle } />
        </div>
      </Control>
    );
  }
}

ActuatorControl.propTypes = {
  mode: PropTypes.oneOf([Modes.MANUAL, Modes.AUTOMATIC]).isRequired,
  selectIsActivated: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired
};

ActuatorControl.defaultProps = {
  mode: Modes.MANUAL,
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
