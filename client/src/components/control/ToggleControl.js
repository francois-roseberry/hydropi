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
    this.state = { value: false };
  }

  onToggle() {
    this.setState({ value: !this.state.value });
  }

  render() {
    return (
      <Control title={ this.props.title }>
        <div className="toggle-wrapper">
          <Toggle value={ this.state.value } onToggle={ this.onToggle } />
        </div>
      </Control>
    );
  }
}

ToggleControl.propTypes = {
  title: PropTypes.string.isRequired
};
