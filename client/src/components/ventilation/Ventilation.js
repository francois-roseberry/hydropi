import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class Ventilation extends React.Component {
  render() {
    return (
      <div className="control">
        <FormattedMessage id="control.ventilation.title" />
      </div>
    );
  }
}
