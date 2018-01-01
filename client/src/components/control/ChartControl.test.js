import React from 'react';
import { shallow } from 'enzyme';

import ChartControl from './ChartControl';

describe('Chart control', () => {
  const TITLE = 'title';
  const wrapper = shallow(<ChartControl title={ TITLE } />);

  it('gives the title to the control', () => {
    const control = wrapper.find('Control');
    expect(control.prop('title')).toBe(TITLE);
  });

  it('renders a 200 x 200 line chart', () => {
    const chart = wrapper.find('.chart-wrapper LineChart');
    expect(chart.prop('width')).toBe(200);
    expect(chart.prop('height')).toBe(200);
  });
});
