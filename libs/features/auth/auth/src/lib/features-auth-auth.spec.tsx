import { render } from '@testing-library/react';

import FeaturesAuthAuth from './features-auth-auth';

describe('FeaturesAuthAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesAuthAuth />);
    expect(baseElement).toBeTruthy();
  });
});
