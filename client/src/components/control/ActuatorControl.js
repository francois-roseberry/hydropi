import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle-button';
import { bindAll } from 'lodash';

import Control from './Control';

import './ActuatorControl.css';

export default class ActuatorControl extends React.Component {
  constructor(props) {
    super(props);

    bindAll(this, ['onToggle']);
  }

  onToggle() {
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
  title: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired
};

ActuatorControl.defaultProps = {
  value: false
};
