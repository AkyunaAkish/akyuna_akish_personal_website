import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import {Router, Route, IndexRoute, browserHistory, Redirect} from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import logger from 'redux-logger'
import promise from 'redux-promise'

import reducers from './reducers'
import routes from './routes'

import './sass/style.scss'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()
const createStoreWithMiddleware = !process.env.NODE_ENV  ? applyMiddleware(promise, logger())(createStore) : applyMiddleware(promise)(createStore)

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>
  </MuiThemeProvider>
  , document.querySelector('#main'))
