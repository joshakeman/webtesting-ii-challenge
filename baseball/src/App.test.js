import React from 'react';
import ReactDOM from 'react-dom';

import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('should display hello world', () => {
    const { getByText } = render(<App />);

    getByText(/dashboard/i);
  });

  it('should register strike count', () => {
    const { getByText } = render(<App />);

    const button = getByText(/X/i);
    fireEvent.click(button);

    const { queryAllByTestId } = render(<App />);
    const strikes = queryAllByTestId('strikes')

    expect(parseInt(strikes[0].textContent)).toEqual(1)
  });
  //
  
});
