import React from 'react';  
import { render, screen } from '@testing-library/react';  
import '@testing-library/jest-dom';  
import Footer from './Footer';  

test('renders Footer component with links and text', () => {  
  render(<Footer />);  

  // Test footer text  
  const footerText = screen.getByTestId('footer-text');  
  expect(footerText).toHaveTextContent('© 2024 Company, Inc. All rights reserved.');  

  // Test social media links  
  const linkFacebook = screen.getByTestId('link-facebook');  
  expect(linkFacebook).toHaveAttribute('href', 'https://facebook.com');  

  const linkX = screen.getByTestId('link-x');  
  expect(linkX).toHaveAttribute('href', 'https://x.com');  

  const linkInstagram = screen.getByTestId('link-instagram');  
  expect(linkInstagram).toHaveAttribute('href', 'https://instagram.com/');  
});