import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('Application', () => {
  const wrapper = shallow(<App />);

  it('renders a Dashboard', () => {
    const component = wrapper.find('.content Dashboard');
    expect(component).toHaveLength(1);
  });
});
