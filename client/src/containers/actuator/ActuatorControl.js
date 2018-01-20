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

  onModeToggle() {
    const newMode = this.props.mode === Modes.MANUAL ? Modes.AUTOMATIC : Modes.MANUAL;
    this.props.setMode({ socket: this.props.socket, mode: newMode });
  }

  onStateToggle() {
    this.props.setState({ socket: this.props.socket, state: !this.props.value });
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
  selector: PropTypes.shape({
    selectIsActivated: PropTypes.func.isRequired,
    selectMode: PropTypes.func.isRequired
  }).isRequired,
  selectSocket: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
  socket: PropTypes.object,
  title: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired
};

ActuatorControl.defaultProps = {
  mode: Modes.MANUAL,
  value: false
};

export const mapStateToProps = (state, props) => ({
  value: props.selector.selectIsActivated(state),
  mode: props.selector.selectMode(state),
  socket: props.selectSocket(state)
});

export const mapDispatchToProps = (dispatch, props) => ({
  setState: (...args) => dispatch(props.setState(...args)),
  setMode: (...args) => dispatch(props.setMode(...args))
});

export { ActuatorControl };
export default connect(mapStateToProps, mapDispatchToProps)(ActuatorControl);
