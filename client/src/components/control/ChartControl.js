import React from 'react';
import PropTypes from 'prop-types';

import Control from './Control';
import Chart from '../chart/Chart'

export default class ChartControl extends React.Component {
  render() {
    return (
      <Control title={ this.props.title }>
        <Chart />
      </Control>
    );
  }
}

ChartControl.propTypes = {
  title: PropTypes.string.isRequired
};
