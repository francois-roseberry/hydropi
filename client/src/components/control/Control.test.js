import React from 'react';
import { shallow } from 'enzyme';

import Control from './Control';

describe('Control', () => {
  const TITLE = 'title';
  const wrapper = shallow(<Control title={ TITLE }><span>content</span></Control>);

  it('renders the title', () => {
    const message = wrapper.find('.control FormattedMessage');
    expect(message.prop('id')).toBe(TITLE);
  });

  it('renders the content', () => {
    const content = wrapper.find('.control .control-content span');
    expect(content.text()).toBe('content');
  });
});
