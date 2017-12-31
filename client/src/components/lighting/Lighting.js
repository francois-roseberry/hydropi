import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class Lighting extends React.Component {
  render() {
    return (
      <div className="control">
        <FormattedMessage id="control.lighting.title" />
      </div>
    )
  }
}
