import { airTemperatureReducer } from './airTemperature';

describe('Air Temperature reducer', () => {
  it('returns the initial state', () => {
    const state = airTemperatureReducer();
    expect(state).toMatchObject({ data: [{ x: 0, y: 26 }, { x: 1, y: 24 }, { x: 2, y: 22 }, { x: 3, y: 25 }] });
  });
});
