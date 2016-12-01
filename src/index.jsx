// Libs
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Link } from 'react-router'
import { getUsers } from './libs.jsx'

// Components
import { User } from './component/User.jsx'

// Styles
require('./styles.scss')

// COOOODE!
export class Users extends Component {

  constructor (props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount () {
    getUsers()
    .then(response => {
      this.setState({
        users: response.data.results
      })
    })
    .catch(error => console.log(error))
  }

  render () {
    return (
      <div>
        <h1>Star Wars Characters</h1>
        <Link to='/other'>Other</Link>
        {this.state.users.map(user => {
          return <User name={user.name} key={user.name} />
        })}
      </div>
    )
  }
}

const Other = () => {
  return <div>Other</div>
}

ReactDOM.render((
  /* ROUTER
    Let's mount router to the DOM 
    It'll take a path and show a component to that path
  */
  <Router history={browserHistory}>
    <Route path='/' component={Users} />
    <Route path='/other' component={Other} />
  </Router>
), document.getElementById('root'))
