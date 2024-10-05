import React from 'react';  
import { render, screen } from '@testing-library/react';  
import '@testing-library/jest-dom';  
import NavBar from './NavBar';  

test('renders NavBar component with search form', () => {  
  const mockSearch = jest.fn();  
  render(<NavBar search={mockSearch} />);  

  // Test search form  
  const formSearch = screen.getByTestId('form-search');  
  expect(formSearch).toBeInTheDocument();  
});