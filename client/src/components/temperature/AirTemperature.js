import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class AirTemperature extends React.Component {
  render() {
    return (
      <div className="control">
        <FormattedMessage id="control.temperature.air.title" />
      </div>
    );
  }
}
