import React from 'react';
import { shallow } from 'enzyme';

import WaterTemperature from './WaterTemperature';

describe('WaterTemperature control', () => {
  it('renders a title', () => {
    const wrapper = shallow(<WaterTemperature />);
    const message = wrapper.find('.control FormattedMessage');
    expect(message.prop('id')).toBe('control.temperature.water.title');
  });
});
