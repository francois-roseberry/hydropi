import React from 'react';
import { shallow } from 'enzyme';

import Humidity from './Humidity';

describe('Humidity control', () => {
  it('renders a SensorControl', () => {
    const wrapper = shallow(<Humidity />);
    const component = wrapper.find('Connect(SensorControl)');
    expect(component.prop('title')).toBe('control.humidity.title');
  });
});
