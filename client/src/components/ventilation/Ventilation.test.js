import React from 'react';
import { shallow } from 'enzyme';

import Ventilation from './Ventilation';
import { setState, setMode } from '../../actions/ventilation';

describe('Ventilation control', () => {
  const wrapper = shallow(<Ventilation />);

  it('renders a ActuatorControl', () => {
    const component = wrapper.find('Connect(ActuatorControl)');
    expect(component.prop('title')).toBe('control.ventilation.title');
    expect(component.prop('selector')).toBeDefined();
    expect(component.prop('setState')).toBe(setState);
    expect(component.prop('setMode')).toBe(setMode);
  });
});
