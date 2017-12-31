import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class Humidity extends React.Component {
  render() {
    return (
      <div className="control">
        <FormattedMessage id="control.humidity.title" />
      </div>
    );
  }
}
