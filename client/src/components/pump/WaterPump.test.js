import React from 'react';
import { shallow } from 'enzyme';

import WaterPump from './WaterPump';

describe('WaterPump control', () => {
  const wrapper = shallow(<WaterPump />);

  it('renders a ToggleControl', () => {
    const message = wrapper.find('ToggleControl');
    expect(message.prop('title')).toBe('control.pump.water.title');
  });
});
