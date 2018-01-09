import React from 'react';
import { shallow } from 'enzyme';

import { SensorControl } from './SensorControl';

describe('Sensor control', () => {
  const TITLE = 'title';
  const selectData = jest.fn();
  const wrapper = shallow(<SensorControl data={ [{ x: 1, y: 1 }] } selectData={ selectData } title={ TITLE } />);

  it('gives the title to the control', () => {
    const control = wrapper.find('Control');
    expect(control.prop('title')).toBe(TITLE);
  });

  it('renders a chart', () => {
    const chart = wrapper.find('Chart');
    expect(chart.prop('data')).toMatchObject([{ x: 1, y: 1 }]);
  });
});
