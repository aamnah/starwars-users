import React, { Component } from 'react'
import { User } from './User.jsx'
import { getPeople } from '../libs/axios.jsx'

export class Users extends Component {

  constructor (props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount () {
    getPeople()
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
