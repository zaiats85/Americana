import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/hello">Hello</Link>
      <Link to="/treneram">Treneram</Link>
      <Link to="/batkam">Batkam</Link>
      <Link to="/rozklad">Rozklad</Link>
    </div>
  </div>
)

export default NavBar