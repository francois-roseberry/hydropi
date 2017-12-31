import React from 'react';
import { shallow } from 'enzyme';

import Humidity from './Humidity';

describe('Humidity control', () => {
  it('renders a title', () => {
    const wrapper = shallow(<Humidity />);
    const message = wrapper.find('.control FormattedMessage');
    expect(message.prop('id')).toBe('control.humidity.title');
  });
});
