import { selectLightingSocket, selectVentilationSocket, selectPumpSocket,
  selectWaterTemperatureSocket, selectAirTemperatureSocket, selectHumiditySocket } from './socket';

describe('Socket selector', () => {
  it('returns lighting socket', () => {
    const state = { sockets: { lighting: 'socket' } };
    const socket = selectLightingSocket(state);
    expect(socket).toBe('socket');
  });

  it('returns ventilation socket', () => {
    const state = { sockets: { ventilation: 'socket' } };
    const socket = selectVentilationSocket(state);
    expect(socket).toBe('socket');
  });

  it('returns pump socket', () => {
    const state = { sockets: { pump: 'socket' } };
    const socket = selectPumpSocket(state);
    expect(socket).toBe('socket');
  });

  it('returns water temperature socket', () => {
    const state = { sockets: { waterTemperature: 'socket' } };
    const socket = selectWaterTemperatureSocket(state);
    expect(socket).toBe('socket');
  });

  it('returns air temperature socket', () => {
    const state = { sockets: { airTemperature: 'socket' } };
    const socket = selectAirTemperatureSocket(state);
    expect(socket).toBe('socket');
  });

  it('returns humidity socket', () => {
    const state = { sockets: { humidity: 'socket' } };
    const socket = selectHumiditySocket(state);
    expect(socket).toBe('socket');
  });
});
