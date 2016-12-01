// Libs
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { getUsers } from './libs.jsx'

// Components
import { User } from './component/User.jsx'

// Styles
require('./styles.scss')

// COOOODE!
export class App extends Component {

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
        {this.state.users.map(user => {
          return <User name={user.name} key={user.name} />
        })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
