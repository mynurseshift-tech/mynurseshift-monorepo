import { render } from '@testing-library/react';

import FeaturesPlanningPlanning from './features-planning-planning';

describe('FeaturesPlanningPlanning', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesPlanningPlanning />);
    expect(baseElement).toBeTruthy();
  });
});
