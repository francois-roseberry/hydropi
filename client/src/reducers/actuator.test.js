import { createActuatorReducer } from './actuator';

describe('Actuator reducer', () => {
  const reducer = createActuatorReducer();

  it('returns the default state', () => {
    const state = reducer();
    expect(state).toMatchObject({ state: 'off' });
  });
});
