import { createActuatorSelector } from './actuator';
import { Modes } from '../components/actuator/modes';
import { States } from '../components/actuator/states';

describe('Actuator selector', () => {
  const selector = createActuatorSelector('actuator');

  it('returns activation state', () => {
    const state = { actuator: { state: States.ON } };
    const activationState = selector.selectState(state);
    expect(activationState).toBe(States.ON);
  });

  it('returns mode', () => {
    const state = { actuator: { mode: Modes.AUTOMATIC }};
    const mode = selector.selectMode(state);
    expect(mode).toBe(Modes.AUTOMATIC);
  });
});
