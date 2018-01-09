import React from 'react';
import { shallow } from 'enzyme';

import { WaterPump } from './WaterPump';

describe('WaterPump control', () => {
  const wrapper = shallow(<WaterPump isActivated />);

  it('renders a ActuatorControl', () => {
    const component = wrapper.find('ActuatorControl');
    expect(component.prop('title')).toBe('control.pump.water.title');
    expect(component.prop('value')).toBe(true);
  });
});
