import { selectIsActivated } from './pump';

describe('Pump selector', () => {
  it('returns activation state', () => {
    const state = { pump: { state: 'on' } };
    const activationState = selectIsActivated(state);
    expect(activationState).toBe(true);
  });
});
