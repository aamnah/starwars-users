import React from 'react'
import { Link } from 'react-router'

export const User = (props) => {
  return (
    <div className='user'>
      <div>Name: <Link to='/profile/1'>{props.name}</Link></div>
    </div>
  )
}
