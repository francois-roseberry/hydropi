import React from 'react';
import { shallow } from 'enzyme';

import Ventilation from './Ventilation';

describe('Ventilation control', () => {
  it('renders a title', () => {
    const wrapper = shallow(<Ventilation />);
    const message = wrapper.find('.control FormattedMessage');
    expect(message.prop('id')).toBe('control.ventilation.title');
  });
});
