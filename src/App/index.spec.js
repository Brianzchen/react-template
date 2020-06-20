import React from 'react';
import { render } from '@testing-library/react';

import App from '.';

describe('<App />', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('container')).toBeDefined();
  });
});
