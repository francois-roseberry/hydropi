import React from 'react';
import { shallow } from 'enzyme';

import AirTemperature from './AirTemperature';

describe('AirTemperature control', () => {
  it('renders a title', () => {
    const wrapper = shallow(<AirTemperature />);
    const message = wrapper.find('.control FormattedMessage');
    expect(message.prop('id')).toBe('control.temperature.air.title');
  });
});
