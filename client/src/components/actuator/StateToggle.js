import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle-button';
import { FormattedMessage } from 'react-intl';
import { bindAll } from 'lodash';

import { States } from './states';

import './StateToggle.css';

export default class StateToggle extends React.Component {
  constructor(props) {
    super(props);

    bindAll(this, ['onToggle']);
  }

  onToggle() {
    const newState = this.props.state === States.ON ? States.OFF : States.ON;
    this.props.onToggle && this.props.onToggle(newState);
  }

  render() {
    return (
      <div className="mode">
        <FormattedMessage id="control.actuator.state.label" />
        <div className="toggle-wrapper">
          <Toggle
            value={ this.props.state === States.ON } onToggle={ this.onToggle } />
        </div>
      </div>
    );
  }
}

StateToggle.propTypes = {
  state: PropTypes.oneOf([States.ON, States.OFF]).isRequired,
  onToggle: PropTypes.func
};

StateToggle.defaultProps = {
  state: States.OFF
};
