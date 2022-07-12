import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar'

test("render SearchBar", () => {
    render(<SearchBar />);
    const placeHolder = screen.getByPlaceholderText(/try me/i);
    expect(placeHolder.value).toBe("");
  });

test("search query should be empty on initial render", () => {
    render(<SearchBar />);
    const searchQuery = screen.getByPlaceholderText(/try me/i);
    expect(searchQuery.value).toEqual('')
  });


// test('change values via the fireEvent.change method', () => {
//     render(<SearchBar />);
//     const searchQuery = screen.getByPlaceholderText(/what are you upto/i);
//     // const handleChange = jest.fn()
//     fireEvent.change(searchQuery, {target: {value: 'a'}})
//     // expect(handleChange).toHaveBeenCalledTimes(1)
//     expect(searchQuery.value).toBe('a')
//   })
