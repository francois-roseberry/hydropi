import React from 'react';
import { shallow } from 'enzyme';

import WaterPump from './WaterPump';
import { setState } from '../../actions/pump';
import { selectIsActivated } from '../../selectors/pump';

describe('WaterPump control', () => {
  const wrapper = shallow(<WaterPump />);

  it('renders a ActuatorControl', () => {
    const component = wrapper.find('Connect(ActuatorControl)');
    expect(component.prop('title')).toBe('control.pump.water.title');
    expect(component.prop('selectIsActivated')).toBe(selectIsActivated);
    expect(component.prop('setState')).toBe(setState);
  });
});
