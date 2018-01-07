import { selectData } from './humidity';

describe('Humidity selector', () => {
  it('returns data', () => {
    const state = { humidity: { data: [{ x: 1, y: 2 }] } };
    const data = selectData(state);
    expect(data).toMatchObject([{ x: 1, y: 2 }]);
  });
});
