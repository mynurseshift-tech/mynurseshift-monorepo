import { render } from '@testing-library/react';

import FeaturesUserUser from './features-user-user';

describe('FeaturesUserUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesUserUser />);
    expect(baseElement).toBeTruthy();
  });
});
