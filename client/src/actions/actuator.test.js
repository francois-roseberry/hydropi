import configureStore from 'redux-mock-store';
import { Server } from 'mock-socket';

import { init, setState, setMode } from './actuator';
import { EVENT_NEW_STATE, EVENT_NEW_MODE, COMMAND_SET_STATE, COMMAND_SET_MODE } from '../config/Api';
import { Modes } from '../components/actuator/modes';

jest.mock('socket.io-client', () => require('mock-socket').SocketIO);

describe('Actuator actions', () => {
  const namespace = 'namespace';
  const actions = {
    setSocket: 'SET_SOCKET',
    newState: 'NEW_STATE',
    newMode: 'NEW_MODE'
  };
  let serverSocket;
  let clientSocket;
  let store;
  const commands = [];
  const dispatch = jest.mock();

  beforeAll(done => {
    const mockServer = new Server(namespace);

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
    clientSocket = init({ store, namespace, actions });
  });

  it('puts the socket in the store', () => {
    expect(store.getActions()).toContainEqual({ type: actions.setSocket, socket: clientSocket });
  });

  it('sends an action when socket receives new state', () => {
    serverSocket.emit(EVENT_NEW_STATE, true);
    expect(store.getActions()).toContainEqual({ type: actions.newState, state: true });
  });

  it('sends an action when socket receives new mode', () => {
    serverSocket.emit(EVENT_NEW_MODE, Modes.MANUAL);
    expect(store.getActions()).toContainEqual({ type: actions.newMode, mode: Modes.MANUAL });
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
