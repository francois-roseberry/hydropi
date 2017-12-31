import React from 'react';
import { shallow } from 'enzyme';
import AirTemperature from './AirTemperature';

it('renders without crashing', () => {
  shallow(<AirTemperature />);
});
