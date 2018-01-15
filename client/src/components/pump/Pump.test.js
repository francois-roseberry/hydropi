import React from 'react';
import { shallow } from 'enzyme';

import Pump from './Pump';
import { setState, setMode } from '../../actions/pump';

describe('Pump control', () => {
  const wrapper = shallow(<Pump />);

  it('renders a ActuatorControl', () => {
    const component = wrapper.find('Connect(ActuatorControl)');
    expect(component.prop('title')).toBe('control.pump.water.title');
    expect(component.prop('selector')).toBeDefined();
    expect(component.prop('setState')).toBe(setState);
    expect(component.prop('setMode')).toBe(setMode);
  });
});
