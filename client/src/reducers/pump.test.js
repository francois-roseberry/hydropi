import { pumpReducer } from './pump';

describe('Pump reducer', () => {
  it('returns the default state', () => {
    const state = pumpReducer();
    expect(state).toMatchObject({ state: 'off' });
  });
});
