import React from 'react';
import { shallow } from 'enzyme';

import Chart from './Chart';

describe('Chart', () => {
  const wrapper = shallow(<Chart />);

  it('renders a 200 x 200 line chart', () => {
    const chart = wrapper.find('.chart-wrapper LineChart');
    expect(chart.prop('width')).toBe(200);
    expect(chart.prop('height')).toBe(200);
  });

  it('renders an X axis', () => {
    const axis = wrapper.find('.chart-wrapper XAxis');
    expect(axis.prop('dataKey')).toBe('x');
  });

  it('renders a Y axis', () => {
    const axis = wrapper.find('.chart-wrapper YAxis');
    expect(axis).toHaveLength(1);
  });

  it('renders a Cartesian Grid', () => {
    const grid = wrapper.find('.chart-wrapper CartesianGrid');
    expect(grid.prop('strokeDasharray')).toBe('3 3');
  });

  it('renders a line', () => {
    const line = wrapper.find('.chart-wrapper Line');
    expect(line.prop('dataKey')).toBe('y');
    expect(line.prop('stroke')).toBe('#8894d8');
    expect(line.prop('type')).toBe('monotone');
  });
});
