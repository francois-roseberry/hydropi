import React from 'react';
import { shallow } from 'enzyme';

import WaterTemperature from './WaterTemperature';

describe('WaterTemperature control', () => {
  it('renders a SensorControl', () => {
    const wrapper = shallow(<WaterTemperature />);
    const message = wrapper.find('Connect(SensorControl)');
    expect(message.prop('title')).toBe('control.temperature.water.title');
  });
});
