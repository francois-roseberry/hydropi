import React from 'react';
import { shallow } from 'enzyme';
import Humidity from './Humidity';

it('renders without crashing', () => {
  shallow(<Humidity />);
});
