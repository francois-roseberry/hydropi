import { selectIsActivated } from './ventilation';

describe('Ventilation selector', () => {
  it('returns activation state', () => {
    const state = { ventilation: { state: true } };
    const activationState = selectIsActivated(state);
    expect(activationState).toBe(true);
  });
});
