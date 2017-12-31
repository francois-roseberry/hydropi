import React from 'react';
import { shallow } from 'enzyme';

import Lighting from './Lighting';

describe('Lighting control', () => {
  it('renders a title', () => {
    const wrapper = shallow(<Lighting />);
    const message = wrapper.find('.control FormattedMessage');
    expect(message.prop('id')).toBe('control.lighting.title');
  });
});
