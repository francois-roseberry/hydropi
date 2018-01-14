import { createActuatorSelector } from './actuator';

describe('Actuator selector', () => {
  const selector = createActuatorSelector('actuator');

  it('returns activation state', () => {
    const state = { actuator: { state: true } };
    const activationState = selector.selectIsActivated(state);
    expect(activationState).toBe(true);
  });
});
