import { selectData } from './waterTemperature';

describe('Water Temperature selector', () => {
  it('returns data', () => {
    const state = { waterTemperature: { data: [{ x: 1, y: 2 }] } };
    const data = selectData(state);
    expect(data).toMatchObject([{ x: 1, y: 2 }]);
  });
});
