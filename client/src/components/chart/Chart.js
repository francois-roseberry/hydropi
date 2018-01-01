import React from 'react';
import { LineChart, XAxis, YAxis, Line, CartesianGrid } from 'recharts';

import './Chart.css';

export default class Chart extends React.Component {
  constructor(props) {
    super(props);

    const data = [{ x: 0, y: 5 }, { x: 1, y: 6 }, { x: 2, y: 4 }, { x: 3, y: 5 }];
    this.state = { data };
  }

  render() {
    return (
      <div className="chart-wrapper">
        <LineChart width={ 200 } height={ 200 } data={ this.state.data }>
          <XAxis dataKey="x" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Line dataKey="y" stroke="#8894d8" type="monotone" />
        </LineChart>
      </div>
    );
  }
}
