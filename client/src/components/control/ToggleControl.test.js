import React from 'react';
import { shallow } from 'enzyme';

import ToggleControl from './ToggleControl';

describe('Toggle control', () => {
  const TITLE = 'title';
  const wrapper = shallow(<ToggleControl title={ TITLE } />);

  it('renders a title', () => {
    const message = wrapper.find('.control FormattedMessage');
    expect(message.prop('id')).toBe(TITLE);
  });

  it('renders a toggle button', () => {
    const component = wrapper.find('Toggle');
    expect(component.prop('value')).toBe(false);
  });
});
