import { render } from '@testing-library/react';

import SharedUiUi from './shared-ui-ui';

describe('SharedUiUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiUi />);
    expect(baseElement).toBeTruthy();
  });
});
