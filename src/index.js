import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setupSocket from './sockets'
import reducers from './reducers';
import handleNewMessge from './sagas'
import username from './utils/name'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessge, {socket, username})


ReactDOM.render(
    <div>
    <Provider store={store}>
        <App />
    </Provider></div>, 
    document.getElementById('root')
);
registerServiceWorker();
