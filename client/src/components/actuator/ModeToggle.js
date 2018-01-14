import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle-button';
import { FormattedMessage } from 'react-intl';
import { bindAll } from 'lodash';

import { Modes } from './modes';

import './ModeToggle.css';

export default class ModeToggle extends React.Component {
  constructor(props) {
    super(props);

    bindAll(this, ['onToggle']);
  }

  onToggle() {
    const newMode = this.props.mode === Modes.MANUAL ? Modes.AUTOMATIC : Modes.MANUAL;
    this.props.onToggle && this.props.onToggle(newMode);
  }

  render() {
    return (
      <div className="mode">
        <FormattedMessage id="control.actuator.mode.label" />
        <div className="toggle-wrapper">
          <Toggle
            activeLabel={ <FormattedMessage id='control.actuator.mode.manual' /> }
            inactiveLabel={ <FormattedMessage id='control.actuator.mode.automatic' /> }
            containerStyle={ { width: 80 } } trackStyle={ { width: 80 } } thumbAnimateRange={ [1, 62] }
            value={ this.props.mode === Modes.MANUAL } onToggle={ this.onToggle } />
        </div>
      </div>
    );
  }
}

ModeToggle.propTypes = {
  mode: PropTypes.oneOf([Modes.MANUAL, Modes.AUTOMATIC]).isRequired,
  onToggle: PropTypes.func,
};

ModeToggle.defaultProps = {
  mode: Modes.MANUAL
};
