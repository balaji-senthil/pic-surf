import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('render Header Component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Pic surf app/i);
  expect(linkElement).toBeInTheDocument();
});