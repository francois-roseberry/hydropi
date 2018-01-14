import React from 'react';
import { shallow } from 'enzyme';

import Lighting from './Lighting';
import { setState } from '../../actions/lighting';

describe('Lighting control', () => {
  const wrapper = shallow(<Lighting isActivated />);

  it('renders a ActuatorControl', () => {
    const component = wrapper.find('Connect(ActuatorControl)');
    expect(component.prop('title')).toBe('control.lighting.title');
    expect(component.prop('selectIsActivated')).toBeDefined();
    expect(component.prop('setState')).toBe(setState);
  });
});
