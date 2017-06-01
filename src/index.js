import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import Gallery from './Components/Gallery'
import reducer from './Reducer'

import {watchLoadImages} from './Sagas';

const store = createStore(
  reducer,
  applyMiddleware(createSagaMiddleware(watchLoadImages))
);

ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
);
