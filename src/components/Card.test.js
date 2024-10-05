import {React, act} from 'react';
import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

const el = {
  image: 'https://via.placeholder.com/150',
  name: 'Test Recipe',
  rating: 4.5,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  id: 1
};

test('renders the component Card & given props', () => {
  render(<Card el={el} />);
  const img = screen.getByTestId(`img-recipe-${el.id}`);
  expect(img).toHaveAttribute('alt', el.name);
});
