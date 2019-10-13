import React from 'react';
import { shallow } from 'enzyme';

import Home from './home';

it('renders correctly', () => {
  const props = {
    messages: [],
    loadMessages: () => {},
    loadMembers: () => {},
  };
  const tree = shallow(<Home.WrappedComponent {...props} />);
  expect(tree).toMatchSnapshot();
});
