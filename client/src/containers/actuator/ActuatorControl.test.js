import React from 'react';
import { shallow } from 'enzyme';

import { ActuatorControl } from './ActuatorControl';

describe('Actuator control', () => {
  const TITLE = 'title';
  const selectIsActivated = jest.fn();
  const getWrapper = ({ value = false } = {}) =>
    shallow(<ActuatorControl selectIsActivated={ selectIsActivated } title={ TITLE } value={ value } />);
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
