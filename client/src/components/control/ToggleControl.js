import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle-button';
import { FormattedMessage } from 'react-intl';
import { bindAll } from 'lodash';

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
      <div className="control">
        <FormattedMessage id={ this.props.title } />
        <div className="control-content">
          <div className="toggle-wrapper">
            <Toggle value={ this.state.value } onToggle={ this.onToggle } />
          </div>
        </div>
      </div>
    );
  }
}

ToggleControl.propTypes = {
  title: PropTypes.string.isRequired
};
