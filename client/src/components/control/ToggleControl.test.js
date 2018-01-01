import React from 'react';
import { shallow } from 'enzyme';

import ToggleControl from './ToggleControl';

describe('Toggle control', () => {
  const TITLE = 'title';
  const wrapper = shallow(<ToggleControl title={ TITLE } />);

  it('gives the title to the control', () => {
    const control = wrapper.find('Control');
    expect(control.prop('title')).toBe(TITLE);
  });

  it('renders a toggle button', () => {
    const component = wrapper.find('.toggle-wrapper Toggle');
    expect(component.prop('value')).toBe(false);
  });
});
