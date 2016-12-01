import React from 'react'

export const AppLayout = (props) => {
  return (
    <div>
      <header>
        <h3>Welcome to Star Wars</h3>
      </header>
      <main>
        { props.children }
      </main>
      <footer>
        <p>Data served from: <a href='http://swapi.co'>SWAPI</a></p>
      </footer>
    </div>
  )
}
