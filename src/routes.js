import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Blogs from './components/Blogs'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Portfolio} />
    <Route path="skills" component={Skills} />
    <Route path="contact" component={Contact} />
    <Route path="blogs" component={Blogs} />
    <Redirect from="*" to="/" />
  </Route>
)
