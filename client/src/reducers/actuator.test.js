import { createActuatorReducer } from './actuator';
import { Modes } from '../components/actuator/modes';

describe('Actuator reducer', () => {
  const reducer = createActuatorReducer('new_state', 'new_mode');

  it('returns the default state', () => {
    const state = reducer();
    expect(state).toMatchObject({ state: false, mode: Modes.MANUAL });
  });

  describe('given new activation state', () => {
    it('updates the activation state', () => {
      const state = { state: false };
      const action = { type: 'new_state', state: true };
      const newState = reducer(state, action);
      expect(newState).toMatchObject({ state: true });
    });
  });

  describe('given new mode', () => {
    it('updates the mode', () => {
      const state = { mode: Modes.MANUAL };
      const action = { type: 'new_mode', mode: Modes.AUTOMATIC };
      const newState = reducer(state, action);
      expect(newState).toMatchObject({ mode: Modes.AUTOMATIC });
    });
  });
});
