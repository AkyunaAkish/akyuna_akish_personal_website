import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Portfolio} />
    <Route path="contact" component={Contact} />
    <Redirect from="*" to="/" />
  </Route>
)
