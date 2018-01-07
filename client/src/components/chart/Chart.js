import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, XAxis, YAxis, Line, CartesianGrid } from 'recharts';

import './Chart.css';

export default class Chart extends React.Component {
  render() {
    return (
      <div className="chart-wrapper">
        <LineChart width={ 200 } height={ 200 } data={ this.props.data }>
          <XAxis dataKey="x" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Line dataKey="y" stroke="#8894d8" type="monotone" />
        </LineChart>
      </div>
    );
  }
}

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  })).isRequired
};
