import { selectIsActivated } from './lighting';

describe('Lighting selector', () => {
  it('returns activation state', () => {
    const state = { lighting: { state: true } };
    const activationState = selectIsActivated(state);
    expect(activationState).toBe(true);
  });
});
