import React from 'react';
import { shallow } from 'enzyme';

import Ventilation from './Ventilation';

describe('Ventilation control', () => {
  const wrapper = shallow(<Ventilation />);

  it('renders a ActuatorControl', () => {
    const component = wrapper.find('Connect(ActuatorControl)');
    expect(component.prop('title')).toBe('control.ventilation.title');
  });
});
