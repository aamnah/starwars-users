import React from 'react'
import { Link } from 'react-router'

export const User = (props) => {
  return (
    <div className='user'>
      <div><Link to={'/profile/' + props.id}>{props.name}</Link></div>
    </div>
  )
}
