import { airTemperatureReducer } from './airTemperature';
import { AIR_TEMPERATURE_NEW_READING } from '../actions/types.js';

describe('Air Temperature reducer', () => {
  it('returns the initial state', () => {
    const state = airTemperatureReducer();
    expect(state).toMatchObject({ data: [] });
  });

  describe('given new reading', () => {
    it('appends it to the end of the data array, discarding the first one so there are always 4', () => {
      const reading = { x: 1, y: 2 };
      const state = { data: [{}, {}, {}, {}] };
      const action = { type: AIR_TEMPERATURE_NEW_READING, reading };
      const newState = airTemperatureReducer(state, action);
      expect(newState).toMatchObject({ data: [{}, {}, {}, reading] });
    });
  });
});
