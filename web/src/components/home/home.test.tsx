import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

describe('home component', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });
});
