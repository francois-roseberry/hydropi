import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, XAxis, YAxis, Line, CartesianGrid } from 'recharts';

import Control from './Control';

import './ChartControl.css';

export default class ChartControl extends React.Component {
  constructor(props) {
    super(props);

    const data = [{ x: 0, y: 5 }, { x: 1, y: 6 }, { x: 2, y: 4 }, { x: 3, y: 5 }];
    this.state = { data };
  }

  render() {
    return (
      <Control title={ this.props.title }>
        <div className="chart-wrapper">
          <LineChart width={ 200 } height={ 200 } data={ this.state.data }>
            <XAxis dataKey="x" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Line dataKey="y" stroke="#8894d8" type="monotone" />
          </LineChart>
        </div>
      </Control>
    );
  }
}

ChartControl.propTypes = {
  title: PropTypes.string.isRequired
};
