import { selectIsActivated } from './lighting';

describe('Lighting selector', () => {
  it('returns activation state', () => {
    const state = { lighting: { state: 'on' } };
    const activationState = selectIsActivated(state);
    expect(activationState).toBe(true);
  });
});
