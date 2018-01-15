import { createSensorSelector } from './sensor';

describe('Sensor selector', () => {
  const selector = createSensorSelector('sensor');

  it('returns data', () => {
    const state = { sensor: { data: [{ x: 1, y: 2 }] } };
    const data = selector.selectData(state);
    expect(data).toMatchObject([{ x: 1, y: 2 }]);
  });
});
