import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('Application', () => {
  const wrapper = shallow(<App />);

  it('renders Humidity control', () => {
    const component = wrapper.find('.content Humidity');
    expect(component).toHaveLength(1);
  });

  it('renders AirTemperature control', () => {
    const component = wrapper.find('.content AirTemperature');
    expect(component).toHaveLength(1);
  });

  it('renders WaterTemperature control', () => {
    const component = wrapper.find('.content WaterTemperature');
    expect(component).toHaveLength(1);
  });

  it('renders Ventilation control', () => {
    const component = wrapper.find('.content Ventilation');
    expect(component).toHaveLength(1);
  });

  it('renders Lighting control', () => {
    const component = wrapper.find('.content Lighting');
    expect(component).toHaveLength(1);
  });
});
