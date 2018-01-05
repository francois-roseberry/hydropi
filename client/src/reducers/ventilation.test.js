import { ventilationReducer } from './ventilation';

describe('Ventilation reducer', () => {
  it('returns the default state', () => {
    const state = ventilationReducer();
    expect(state).toMatchObject({ state: 'off' });
  });
});
