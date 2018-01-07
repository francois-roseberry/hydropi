import React from 'react';
import { shallow } from 'enzyme';

import AirTemperature from './AirTemperature';

describe('AirTemperature control', () => {
  it('renders a ChartControl', () => {
    const wrapper = shallow(<AirTemperature />);
    const message = wrapper.find('Connect(ChartControl)');
    expect(message.prop('title')).toBe('control.temperature.air.title');
  });
});
