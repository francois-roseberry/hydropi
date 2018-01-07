import { selectData } from './airTemperature';

describe('Air Temperature selector', () => {
  it('returns data', () => {
    const state = { airTemperature: { data: [{ x: 1, y: 2 }] } };
    const data = selectData(state);
    expect(data).toMatchObject([{ x: 1, y: 2 }]);
  });
});
