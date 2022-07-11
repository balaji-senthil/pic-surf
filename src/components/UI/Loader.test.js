import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

test('render Loader Component', () => {
  render(<Loader />).asFragment;
});