import React from 'react';
import { shallow } from 'enzyme';
import IngredientList from './ingredient-list';

describe('ingredient list component', () => {
  it('renders without crashing', () => {
    const cmp = shallow(<IngredientList />);
    expect(cmp.contains(<h2>Ingredient List</h2>));
  });
});
