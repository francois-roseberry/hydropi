import React from 'react';
import { shallow } from 'enzyme';

import Lighting from './Lighting';

describe('Lighting control', () => {
  const wrapper = shallow(<Lighting />);

  it('renders a ToggleControl', () => {
    const message = wrapper.find('ToggleControl');
    expect(message.prop('title')).toBe('control.lighting.title');
  });
});
