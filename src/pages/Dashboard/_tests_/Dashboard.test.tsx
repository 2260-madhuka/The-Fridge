import React from 'react';
import Dashboard from '../Dashboard';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

jest.mock('axios');

const component = <Dashboard />;

describe('renders correctly', () => {
  jest.useFakeTimers();

  it('renders Snapshot', () => {
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });
});
