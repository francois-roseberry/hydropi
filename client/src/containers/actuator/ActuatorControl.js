import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindAll } from 'lodash';

import Control from '../../components/control/Control';
import ModeToggle from '../../components/actuator/ModeToggle';
import StateToggle from '../../components/actuator/StateToggle';
import { Modes } from '../../components/actuator/modes';
import { States } from '../../components/actuator/states';

export class ActuatorControl extends React.Component {
  constructor(props) {
    super(props);

    bindAll(this, ['onStateToggle', 'onModeToggle']);
  }

  onModeToggle(mode) {
    this.props.setMode({ socket: this.props.socket, mode });
  }

  onStateToggle(state) {
    this.props.setState({ socket: this.props.socket, state });
  }

  render() {
    return (
      <Control title={ this.props.title }>
        <ModeToggle mode={ this.props.mode } onToggle={ this.onModeToggle } />
        <StateToggle state={ this.props.state } onToggle={ this.onStateToggle } />
      </Control>
    );
  }
}

ActuatorControl.propTypes = {
  mode: PropTypes.oneOf([Modes.MANUAL, Modes.AUTOMATIC]).isRequired,
  selector: PropTypes.shape({
    selectState: PropTypes.func.isRequired,
    selectMode: PropTypes.func.isRequired
  }).isRequired,
  selectSocket: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
  socket: PropTypes.object,
  state: PropTypes.oneOf([States.ON, States.OFF]).isRequired,
  title: PropTypes.string.isRequired
};

ActuatorControl.defaultProps = {
  mode: Modes.MANUAL,
  state: States.OFF
};

export const mapStateToProps = (state, props) => ({
  state: props.selector.selectState(state),
  mode: props.selector.selectMode(state),
  socket: props.selectSocket(state)
});

export const mapDispatchToProps = (dispatch, props) => ({
  setState: (...args) => dispatch(props.setState(...args)),
  setMode: (...args) => dispatch(props.setMode(...args))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActuatorControl);
