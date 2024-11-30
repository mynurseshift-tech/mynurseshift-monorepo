import { render } from '@testing-library/react';

import CoreCore from './core-core';

describe('CoreCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreCore />);
    expect(baseElement).toBeTruthy();
  });
});
