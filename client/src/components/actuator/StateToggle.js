import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle-button';
import { FormattedMessage } from 'react-intl';
import { bindAll } from 'lodash';

import './StateToggle.css';

export default class StateToggle extends React.Component {
  constructor(props) {
    super(props);

    bindAll(this, ['onToggle']);
  }

  onToggle() {
    this.props.onToggle && this.props.onToggle(!this.props.state);
  }

  render() {
    return (
      <div className="mode">
        <FormattedMessage id="control.actuator.state.label" />
        <div className="toggle-wrapper">
          <Toggle
            value={ this.props.state } onToggle={ this.onToggle } />
        </div>
      </div>
    );
  }
}

StateToggle.propTypes = {
  state: PropTypes.bool.isRequired,
  onToggle: PropTypes.func
};

StateToggle.defaultProps = {
  state: false
};
