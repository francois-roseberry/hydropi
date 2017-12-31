import React from 'react';
import { shallow } from 'enzyme';
import Lighting from './Lighting';

it('renders without crashing', () => {
  shallow(<Lighting />);
});
