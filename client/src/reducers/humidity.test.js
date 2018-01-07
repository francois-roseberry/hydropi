import { humidityReducer } from './humidity';

describe('Lighting reducer', () => {
  it('returns the initial state', () => {
    const state = humidityReducer();
    expect(state).toMatchObject({ data: [{ x: 0, y: 5 }, { x: 1, y: 6 }, { x: 2, y: 4 }, { x: 3, y: 5 }] });
  });
});
