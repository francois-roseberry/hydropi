import configureStore from 'redux-mock-store';
import { Server } from 'mock-socket';

import { init } from './sensor';
import { EVENT_NEW_READING } from '../config/Api';

jest.mock('socket.io-client', () => require('mock-socket').SocketIO);

describe('Actuator actions', () => {
  const namespace = 'namespace';
  const actions = {
    setSocket: 'SET_SOCKET',
    newReading: 'NEW_READING'
  };
  let serverSocket;
  let clientSocket;
  let store;
  const dispatch = jest.mock();

  beforeAll(done => {
    const mockServer = new Server(namespace);

    mockServer.on('connection', socket => {
      serverSocket = socket;
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

  it('sends an action when socket receives new reading', () => {
    serverSocket.emit(EVENT_NEW_READING, { x: 1, y: 2 });
    expect(store.getActions()).toContainEqual({ type: actions.newReading, reading: { x: 1, y: 2 } });
  });
});
