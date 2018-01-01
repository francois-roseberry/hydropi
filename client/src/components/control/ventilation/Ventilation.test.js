import React from 'react';
import { shallow } from 'enzyme';

import Ventilation from './Ventilation';

describe('Ventilation control', () => {
  it('renders a ToggleControl', () => {
    const wrapper = shallow(<Ventilation />);
    const message = wrapper.find('ToggleControl');
    expect(message.prop('title')).toBe('control.ventilation.title');
  });
});
