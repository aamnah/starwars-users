import React from 'react'
import { Link } from 'react-router'

export const User = (props) => {
  return (
    <div className='user'>
      <div>Name: <Link to={'/profile/' + props.id}>{props.name}</Link></div>
    </div>
  )
}
