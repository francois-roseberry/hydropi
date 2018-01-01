import React from 'react';
import { shallow } from 'enzyme';

import ChartControl from './ChartControl';

describe('Chart control', () => {
  const TITLE = 'title';
  const wrapper = shallow(<ChartControl title={ TITLE } />);

  it('renders a title', () => {
    const message = wrapper.find('.control FormattedMessage');
    expect(message.prop('id')).toBe(TITLE);
  });

  it('renders a 200 x 200 line chart', () => {
    const chart = wrapper.find('.control LineChart');
    expect(chart.prop('width')).toBe(200);
    expect(chart.prop('height')).toBe(200);
  });
});
