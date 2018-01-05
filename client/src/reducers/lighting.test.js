import { lightingReducer } from './lighting';

describe('Lighting reducer', () => {
  it('returns the default state', () => {
    const state = lightingReducer();
    expect(state).toMatchObject({ state: 'off' });
  });
});
