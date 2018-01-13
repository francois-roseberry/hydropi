import React from 'react';
import { shallow } from 'enzyme';

import Ventilation from './Ventilation';
import { setState } from '../../actions/ventilation';
import { selectIsActivated } from '../../selectors/ventilation';

describe('Ventilation control', () => {
  const wrapper = shallow(<Ventilation />);

  it('renders a ActuatorControl', () => {
    const component = wrapper.find('Connect(ActuatorControl)');
    expect(component.prop('title')).toBe('control.ventilation.title');
    expect(component.prop('selectIsActivated')).toBe(selectIsActivated);
    expect(component.prop('setState')).toBe(setState);
  });
});
