// Libs
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Components
import { AppLayout } from './layout/AppLayout.jsx'
import { Users } from './component/Users.jsx'
import { UserProfile } from './component/UserProfile.jsx'

// Styles
require('./styles.scss')

// COOOODE!
ReactDOM.render((
  /* ROUTER
    Let's mount Router to the DOM 
    It'll take Routes
    A Route takes a path and show a component to that path
  */
  <Router history={browserHistory}>
    <Route path='/' component={AppLayout}>
      <IndexRoute component={Users} />
      <Route path='/profile/:id' component={UserProfile} />
    </Route>
  </Router>
), document.getElementById('root'))
