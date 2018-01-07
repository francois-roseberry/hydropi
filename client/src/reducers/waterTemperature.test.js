import { waterTemperatureReducer } from './waterTemperature';

describe('Water Temperature reducer', () => {
  it('returns the initial state', () => {
    const state = waterTemperatureReducer();
    expect(state).toMatchObject({ data: [{ x: 0, y: 22 }, { x: 1, y: 21 }, { x: 2, y: 19 }, { x: 3, y: 20 }] });
  });
});
