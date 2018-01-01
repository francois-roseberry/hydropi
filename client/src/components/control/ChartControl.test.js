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

  it('renders a chart', () => {
    const chart = wrapper.find('Chart');
    expect(chart).toHaveLength(1);
  });
});
