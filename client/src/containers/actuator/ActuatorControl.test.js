import React from 'react';
import { shallow } from 'enzyme';

import { ActuatorControl, mapDispatchToProps } from './ActuatorControl';

describe('Actuator control', () => {
  const TITLE = 'title';
  const selectIsActivated = jest.fn();
  const setState = jest.fn();
  const getWrapper = ({ value = false } = {}) =>
    shallow(<ActuatorControl selectIsActivated={ selectIsActivated } setState={ setState } title={ TITLE } value={ value } />);
  const wrapper = getWrapper();

  beforeEach(setState.mockReset);

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

  it('set new state if state button is toggled', () => {
    const component = wrapper.find('.toggle-wrapper Toggle');
    component.simulate('toggle');
    expect(setState).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledWith({ state: true });
  });

  describe('mapDispatchToProps', () => {
    let dispatch = jest.fn();
    const dispatchProps = mapDispatchToProps(dispatch, { setState });

    it('should provide a method for setting state', () => {
      expect(dispatchProps.setState).toBeDefined();
    });

    it('should propagate args when setting state', () => {
      dispatchProps.setState({ state: true });
      expect(setState).toHaveBeenCalledTimes(1);
      expect(setState).toHaveBeenCalledWith({ state: true });
    });
  });
});
