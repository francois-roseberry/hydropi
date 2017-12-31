import React from 'react';
import { shallow } from 'enzyme';
import WaterTemperature from './WaterTemperature';

it('renders without crashing', () => {
  shallow(<WaterTemperature />);
});
