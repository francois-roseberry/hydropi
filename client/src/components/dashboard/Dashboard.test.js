import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from './Dashboard';

describe('Dashboard', () => {
  const wrapper = shallow(<Dashboard />);

  it('renders Humidity control', () => {
    const component = wrapper.find('.dashboard Humidity');
    expect(component).toHaveLength(1);
  });

  it('renders AirTemperature control', () => {
    const component = wrapper.find('.dashboard AirTemperature');
    expect(component).toHaveLength(1);
  });

  it('renders WaterTemperature control', () => {
    const component = wrapper.find('.dashboard WaterTemperature');
    expect(component).toHaveLength(1);
  });

  it('renders Ventilation control', () => {
    const component = wrapper.find('.dashboard Ventilation');
    expect(component).toHaveLength(1);
  });

  it('renders Lighting control', () => {
    const component = wrapper.find('.dashboard Lighting');
    expect(component).toHaveLength(1);
  });

  it('renders Pump control', () => {
    const component = wrapper.find('.dashboard Pump');
    expect(component).toHaveLength(1);
  });
});
