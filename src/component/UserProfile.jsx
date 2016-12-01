import React, {Component} from 'react'
import { getPerson } from '../libs/axios.jsx'

export class UserProfile extends Component {

  constructor () {
    super()

    this.state = {
      name: null,
      eyeColor: null,
      height: null
    }
  }

  componentDidMount () {
    let id = this.props.params.id
    getPerson(id)
    .then(response => {
      console.log('Success!', response)
      this.setState({
        name: response.data.name,
        eyeColor: response.data.eye_color,
        height: response.data.height
      })
    })
    .catch(error => {
      console.log('Error', error)
    })
  }

  render () {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>Eye Color: {this.state.eyeColor} </p>
        <p>Height: {this.state.height} </p>
      </div>
    )
  }
}
