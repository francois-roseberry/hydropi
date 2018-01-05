import React from 'react';
import { shallow } from 'enzyme';

import { Lighting } from './Lighting';

describe('Lighting control', () => {
  const wrapper = shallow(<Lighting isActivated />);

  it('renders a ToggleControl', () => {
    const component = wrapper.find('ToggleControl');
    expect(component.prop('title')).toBe('control.lighting.title');
    expect(component.prop('value')).toBe(true);
  });
});
