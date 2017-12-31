import React from 'react';
import { shallow } from 'enzyme';
import Ventilation from './Ventilation';

it('renders without crashing', () => {
  shallow(<Ventilation />);
});
