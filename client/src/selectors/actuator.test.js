import { createActuatorSelector } from './actuator';
import { Modes } from '../components/actuator/modes';

describe('Actuator selector', () => {
  const selector = createActuatorSelector('actuator');

  it('returns activation state', () => {
    const state = { actuator: { state: true } };
    const activationState = selector.selectIsActivated(state);
    expect(activationState).toBe(true);
  });

  it('returns mode', () => {
    const state = { actuator: { mode: Modes.AUTOMATIC }};
    const mode = selector.selectMode(state);
    expect(mode).toBe(Modes.AUTOMATIC);
  });
});
