import configureStore from 'redux-mock-store';
import { Server } from 'mock-socket';

import { init, setState, setMode } from './lighting';
import { SET_LIGHTING_SOCKET, LIGHTING_NEW_STATE, LIGHTING_NEW_MODE } from './types';
import { EVENT_NEW_STATE, EVENT_NEW_MODE, COMMAND_SET_STATE, COMMAND_SET_MODE, LIGHTING_SOCKET_NAMESPACE } from '../config/Api';
import { Modes } from '../components/actuator/modes';

jest.mock('socket.io-client', () => require('mock-socket').SocketIO);

describe('Lighting', () => {
  let serverSocket;
  let clientSocket;
  let store;
  const commands = [];
  const dispatch = jest.mock();

  beforeAll(done => {
    const mockServer = new Server(LIGHTING_SOCKET_NAMESPACE);

    mockServer.on('connection', socket => {
      serverSocket = socket;
      socket.on(COMMAND_SET_STATE, state => {
        commands.push({ type: COMMAND_SET_STATE, state });
      })
      socket.on(COMMAND_SET_MODE, mode => {
        commands.push({ type: COMMAND_SET_MODE, mode });
      });
      done();
    });

    const middlewares = [];
    const mockStore = configureStore(middlewares);
    store = mockStore({});
    clientSocket = init(store);
  });

  it('puts the lighting socket in the store', () => {
    expect(store.getActions()).toContainEqual({ type: SET_LIGHTING_SOCKET, socket: clientSocket });
  });

  it('sends an action when socket receives new state', () => {
    serverSocket.emit(EVENT_NEW_STATE, true);
    expect(store.getActions()).toContainEqual({ type: LIGHTING_NEW_STATE, state: true });
  });

  it('sends an action when socket receives new mode', () => {
    serverSocket.emit(EVENT_NEW_MODE, Modes.MANUAL);
    expect(store.getActions()).toContainEqual({ type: LIGHTING_NEW_MODE, mode: Modes.MANUAL });
  });

  it('sends a command to the server when setting state', () => {
    setState({ socket: clientSocket, state: true })(dispatch);
    expect(commands).toContainEqual({ type: COMMAND_SET_STATE, state: true });
  });

  it('sends a command to the server when setting mode', () => {
    setMode({ socket: clientSocket, mode: Modes.MANUAL })(dispatch);
    expect(commands).toContainEqual({ type: COMMAND_SET_MODE, mode: Modes.MANUAL });
  });
});
