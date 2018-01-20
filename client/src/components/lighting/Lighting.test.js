import React from 'react';
import { shallow } from 'enzyme';

import Lighting from './Lighting';
import { setState, setMode } from '../../actions/actuator';
import { selectLightingSocket } from '../../selectors/socket';

describe('Lighting control', () => {
  const wrapper = shallow(<Lighting />);

  it('renders a ActuatorControl', () => {
    const component = wrapper.find('Connect(ActuatorControl)');
    expect(component.prop('title')).toBe('control.lighting.title');
    expect(component.prop('selector')).toBeDefined();
    expect(component.prop('selectSocket')).toBe(selectLightingSocket);
    expect(component.prop('setState')).toBe(setState);
    expect(component.prop('setMode')).toBe(setMode);
  });
});
