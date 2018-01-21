import React from 'react';
import { shallow } from 'enzyme';

import { ActuatorControl, mapDispatchToProps } from './ActuatorControl';
import { Modes } from '../../components/actuator/modes';
import { States } from '../../components/actuator/states';

describe('Actuator control', () => {
  const TITLE = 'title';
  const selector = {
    selectState: jest.fn(),
    selectMode: jest.fn()
  };
  const selectSocket = jest.fn();
  const setState = jest.fn();
  const setMode = jest.fn();
  const mode = Modes.MANUAL;
  const state = States.OFF;
  const getWrapper = () =>
    shallow(<ActuatorControl mode={ mode } selector={ selector } selectSocket={ selectSocket } setState={ setState } setMode={ setMode }
      socket={ {} } title={ TITLE } state={ state } />);
  const wrapper = getWrapper();

  beforeEach(setState.mockReset);
  beforeEach(setMode.mockReset);

  it('gives the title to the control', () => {
    const control = wrapper.find('Control');
    expect(control.prop('title')).toBe(TITLE);
  });

  it('renders a ModeToggle', () => {
    const component = wrapper.find('ModeToggle');
    expect(component.prop('mode')).toBe(Modes.MANUAL);
    expect(component.prop('onToggle')).toBeDefined();
  });

  it('renders a StateToggle', () => {
    const component = wrapper.find('StateToggle');
    expect(component.prop('state')).toBe(States.OFF);
    expect(component.prop('onToggle')).toBeDefined();
  });

  it('set new mode if ModeToggle is toggled', () => {
    const component = wrapper.find('ModeToggle');
    component.simulate('toggle', Modes.AUTOMATIC);
    expect(setMode).toHaveBeenCalledTimes(1);
    expect(setMode).toHaveBeenCalledWith({ socket: {}, mode: Modes.AUTOMATIC });
  });

  it('set new state if StateToggle is toggled', () => {
    const component = wrapper.find('StateToggle');
    component.simulate('toggle', States.ON);
    expect(setState).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledWith({ socket: {}, state: States.ON });
  });

  describe('mapDispatchToProps', () => {
    let dispatch = jest.fn();
    const dispatchProps = mapDispatchToProps(dispatch, { setState, setMode });

    it('should provide a method for setting state', () => {
      expect(dispatchProps.setState).toBeDefined();
    });

    it('should propagate args when setting state', () => {
      dispatchProps.setState({ state: States.ON });
      expect(setState).toHaveBeenCalledTimes(1);
      expect(setState).toHaveBeenCalledWith({ state: States.ON });
    });

    it('should provide a method for setting mode', () => {
      expect(dispatchProps.setMode).toBeDefined();
    });

    it('should propagate args when setting mode', () => {
      dispatchProps.setMode({ mode: Modes.AUTOMATIC });
      expect(setMode).toHaveBeenCalledTimes(1);
      expect(setMode).toHaveBeenCalledWith({ mode: Modes.AUTOMATIC });
    });
  });
});
