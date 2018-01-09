import { createActuatorReducer } from './actuator';

describe('Actuator reducer', () => {
  const reducer = createActuatorReducer('new_state');

  it('returns the default state', () => {
    const state = reducer();
    expect(state).toMatchObject({ state: false });
  });

  describe('given new activation state', () => {
    it('updates the activation state', () => {
      const state = { state: false };
      const action = { type: 'new_state', state: true };
      const newState = reducer(state, action);
      expect(newState).toMatchObject({ state: true });
    });
  });
});
