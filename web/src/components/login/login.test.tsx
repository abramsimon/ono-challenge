import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('header component', () => {
  it('renders without crashing', () => {
    const header = shallow(<Header />);
    expect(header.contains(<h1>Ono Challenge</h1>));
  });
});
