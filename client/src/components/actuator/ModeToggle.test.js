import React from 'react';
import { shallow } from 'enzyme';

import ModeToggle from './ModeToggle';
import { Modes } from './modes';

describe('ModeToggle', () => {
  const onToggle = jest.fn();
  const getWrapper = ({ mode = Modes.MANUAL } = {}) =>
    shallow(<ModeToggle mode={ mode } onToggle={ onToggle } />);
  const wrapper = getWrapper();

  it('renders a toggle button', () => {
    const component = wrapper.find('.toggle-wrapper Toggle');
    expect(component.prop('value')).toBe(true);
    expect(component.prop('onToggle')).toBeDefined();
    expect(component.prop('containerStyle')).toBeDefined();
    expect(component.prop('trackStyle')).toBeDefined();
    expect(component.prop('thumbAnimateRange')).toBeDefined();
    expect(component.prop('activeLabel')).toBeDefined();
    expect(component.prop('inactiveLabel')).toBeDefined();
  });

  it('toggles the button if told to', () => {
    const component = getWrapper({ mode: Modes.AUTOMATIC }).find('.toggle-wrapper Toggle');
    expect(component.prop('value')).toBe(false);
  });

  it('set new state if state button is toggled', () => {
    const component = wrapper.find('.toggle-wrapper Toggle');
    component.simulate('toggle');
    expect(onToggle).toHaveBeenCalledTimes(1);
    expect(onToggle).toHaveBeenCalledWith(Modes.AUTOMATIC);
  });
});
