import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import AboutPage from './index';
import store from '../../store';

const goBack = jest.fn();

describe('test About Page', () => {
  test('should render About Page', () => {
    const { container, getByTestId } = render(
      <Provider store={store}>
        <AboutPage
          history={{
            goBack,
          }}
        />
      </Provider>,
    );
    expect(container).not.toBe(null);
    expect(getByTestId('label').innerHTML).toEqual('About Page');
    fireEvent.click(getByTestId('backButton'));
    expect(goBack).toBeCalledTimes(1);
    // expect(getByTestId('list')).toBeNull();
  });
});
