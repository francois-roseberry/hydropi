import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class WaterTemperature extends React.Component {
  render() {
    return (
      <div className="control">
        <FormattedMessage id="control.temperature.water.title" />
      </div>
    );
  }
}
