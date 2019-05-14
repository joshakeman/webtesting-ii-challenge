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

    const button = getByText(/^Strike$/);
    fireEvent.click(button);

    const { queryAllByTestId } = render(<App />);
    const strikes = queryAllByTestId('strikes')

    expect(parseInt(strikes[0].textContent)).toEqual(1)
  });
  //
  it('should register ball count', () => {
    const { getByText } = render(<App />);

    const button = getByText(/^Ball$/);
    fireEvent.click(button);

    const { queryAllByTestId } = render(<App />);
    const balls = queryAllByTestId('balls')

    expect(parseInt(balls[0].textContent)).toEqual(1)
  });

  it('should increase strike on click of foul button', () => {
    const { getByText } = render(<App />);

    const button = getByText(/^Foul$/);
    fireEvent.click(button);

    const { queryAllByTestId } = render(<App />);
    const strikes = queryAllByTestId('strikes')

    expect(parseInt(strikes[0].textContent)).toEqual(1)
  });

  it('should record two strikes on two presses of strike button', () => {
    const { getByText } = render(<App />);

    const button = getByText(/^Strike$/);
    fireEvent.click(button);
    fireEvent.click(button);

    const { queryAllByTestId } = render(<App />);
    const strikes = queryAllByTestId('strikes')

    expect(parseInt(strikes[0].textContent)).toEqual(2)
  });

  it('should record zero strikes on three presses of strike button', () => {
    const { getByText } = render(<App />);

    const button = getByText(/^Strike$/);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    const { queryAllByTestId } = render(<App />);
    const strikes = queryAllByTestId('strikes')

    expect(parseInt(strikes[0].textContent)).toEqual(0)
  });
  
  it('should record two balls on two presses of ball button', () => {
    const { getByText } = render(<App />);

    const button = getByText(/^Ball$/);
    fireEvent.click(button);
    fireEvent.click(button);

    const { queryAllByTestId } = render(<App />);
    const balls = queryAllByTestId('balls')

    expect(parseInt(balls[0].textContent)).toEqual(2)
  });

  it('should record three balls on three presses of ball button', () => {
    const { getByText } = render(<App />);

    const button = getByText(/^Ball$/);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    const { queryAllByTestId } = render(<App />);
    const balls = queryAllByTestId('balls')

    expect(parseInt(balls[0].textContent)).toEqual(3)
  });

  it('should record zero balls on four presses of ball button', () => {
    const { getByText } = render(<App />);

    const button = getByText(/^Ball$/);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);


    const { queryAllByTestId } = render(<App />);
    const balls = queryAllByTestId('balls')

    expect(parseInt(balls[0].textContent)).toEqual(0 )
  });

  it('should leave strike at two on third (or more) clicks of foul button', () => {
    const { getByText } = render(<App />);

    const button = getByText(/^Foul$/);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    const { queryAllByTestId } = render(<App />);
    const strikes = queryAllByTestId('strikes')

    expect(parseInt(strikes[0].textContent)).toEqual(2)
  });

  it('should leave strike at two on third (or more) clicks of foul button', () => {
    const { getByText } = render(<App />);

    const strikeButton = getByText(/^Strike$/);
    const hitButton = getByText(/^Hit$/);
    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    // fireEvent.click(button);
    fireEvent.click(hitButton)

    const { queryAllByTestId } = render(<App />);
    const strikes = queryAllByTestId('strikes')

    expect(parseInt(strikes[0].textContent)).toEqual(0)
  });

});
