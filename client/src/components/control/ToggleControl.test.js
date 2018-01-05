import React from 'react';
import { shallow } from 'enzyme';

import ToggleControl from './ToggleControl';

describe('Toggle control', () => {
  const TITLE = 'title';
  const getWrapper = ({ value = false } = {}) => shallow(<ToggleControl title={ TITLE } value={ value } />);
  const wrapper = getWrapper();

  it('gives the title to the control', () => {
    const control = wrapper.find('Control');
    expect(control.prop('title')).toBe(TITLE);
  });

  it('renders a toggle button', () => {
    const component = wrapper.find('.toggle-wrapper Toggle');
    expect(component.prop('value')).toBe(false);
  });

  it('toggles the button if told to', () => {
    const component = getWrapper({ value: true }).find('.toggle-wrapper Toggle');
    expect(component.prop('value')).toBe(true);
  });
});
