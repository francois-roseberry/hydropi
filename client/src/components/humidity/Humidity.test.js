import React from 'react';
import { shallow } from 'enzyme';

import Humidity from './Humidity';

describe('Humidity control', () => {
  it('renders a SensorControl', () => {
    const wrapper = shallow(<Humidity />);
    const message = wrapper.find('Connect(SensorControl)');
    expect(message.prop('title')).toBe('control.humidity.title');
  });
});
