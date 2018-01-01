import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import './Control.css';

export default class Control extends React.Component {
  render() {
    return (
      <div className="control">
        <FormattedMessage id={ this.props.title } />
        <div className="control-content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

Control.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};
