import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle-button';
import { bindAll } from 'lodash';

import Control from './Control';

import './ToggleControl.css';

export default class ToggleControl extends React.Component {
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

ToggleControl.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired
};

ToggleControl.defaultProps = {
  value: false
};
