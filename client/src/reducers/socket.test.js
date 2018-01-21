import { socketReducer } from './socket';
import { SET_LIGHTING_SOCKET, SET_VENTILATION_SOCKET, SET_PUMP_SOCKET,
  SET_WATER_TEMPERATURE_SOCKET, SET_AIR_TEMPERATURE_SOCKET, SET_HUMIDITY_SOCKET } from '../actions/types';

describe('Socket reducer', () => {
  it('returns the default state', () => {
    const state = socketReducer();
    expect(state).toMatchObject({ });
  });

  describe('given lighting socket', () => {
    it('updates the socket', () => {
      const state = { };
      const action = { type: SET_LIGHTING_SOCKET, socket: 'socket' };
      const newState = socketReducer(state, action);
      expect(newState).toMatchObject({ lighting: 'socket' });
    });
  });

  describe('given ventilation socket', () => {
    it('updates the socket', () => {
      const state = { };
      const action = { type: SET_VENTILATION_SOCKET, socket: 'socket' };
      const newState = socketReducer(state, action);
      expect(newState).toMatchObject({ ventilation: 'socket' });
    });
  });

  describe('given pump socket', () => {
    it('updates the socket', () => {
      const state = { };
      const action = { type: SET_PUMP_SOCKET, socket: 'socket' };
      const newState = socketReducer(state, action);
      expect(newState).toMatchObject({ pump: 'socket' });
    });
  });

  describe('given water temperature socket', () => {
    it('updates the socket', () => {
      const state = { };
      const action = { type: SET_WATER_TEMPERATURE_SOCKET, socket: 'socket' };
      const newState = socketReducer(state, action);
      expect(newState).toMatchObject({ waterTemperature: 'socket' });
    });
  });

  describe('given air temperature socket', () => {
    it('updates the socket', () => {
      const state = { };
      const action = { type: SET_AIR_TEMPERATURE_SOCKET, socket: 'socket' };
      const newState = socketReducer(state, action);
      expect(newState).toMatchObject({ airTemperature: 'socket' });
    });
  });

  describe('given humidity socket', () => {
    it('updates the socket', () => {
      const state = { };
      const action = { type: SET_HUMIDITY_SOCKET, socket: 'socket' };
      const newState = socketReducer(state, action);
      expect(newState).toMatchObject({ humidity: 'socket' });
    });
  });
});
