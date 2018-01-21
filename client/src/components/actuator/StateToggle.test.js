import React from 'react';
import { shallow } from 'enzyme';

import StateToggle from './StateToggle';
import { States } from './states';

describe('StateToggle', () => {
  const onToggle = jest.fn();
  const getWrapper = ({ state = States.OFF } = {}) =>
    shallow(<StateToggle state={ state } onToggle={ onToggle } />);
  const wrapper = getWrapper();

  it('renders a toggle button', () => {
    const component = wrapper.find('.toggle-wrapper Toggle');
    expect(component.prop('value')).toBe(false);
  });

  it('toggles the button if told to', () => {
    const component = getWrapper({ state: States.ON }).find('.toggle-wrapper Toggle');
    expect(component.prop('value')).toBe(true);
  });

  it('set new state if state button is toggled', () => {
    const component = wrapper.find('.toggle-wrapper Toggle');
    component.simulate('toggle');
    expect(onToggle).toHaveBeenCalledTimes(1);
    expect(onToggle).toHaveBeenCalledWith(States.ON);
  });
});
