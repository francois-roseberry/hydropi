import React from 'react';
import { shallow } from 'enzyme';

import { Ventilation } from './Ventilation';

describe('Ventilation control', () => {
  const wrapper = shallow(<Ventilation isActivated />);

  it('renders a ActuatorControl', () => {
    const component = wrapper.find('ActuatorControl');
    expect(component.prop('title')).toBe('control.ventilation.title');
    expect(component.prop('value')).toBe(true);
  });
});
