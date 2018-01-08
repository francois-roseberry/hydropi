import { createSensorReducer } from './sensor';

describe('Sensor reducer', () => {
  const reducer = createSensorReducer('new_reading');
  it('returns the initial state', () => {
    const state = reducer();
    expect(state).toMatchObject({ data: [] });
  });

  describe('given new reading', () => {
    it('appends it to the end of the data array, discarding the first one so there are always 4', () => {
      const reading = { x: 1, y: 2 };
      const state = { data: [{}, {}, {}, {}] };
      const action = { type: 'new_reading', reading };
      const newState = reducer(state, action);
      expect(newState).toMatchObject({ data: [{}, {}, {}, reading] });
    });
  });
});
