import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { WrapperApp } from './App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <WrapperApp />
  </Provider>,
  document.getElementById('root')
)