import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header>
      <h2>Header</h2>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/contact-us">contact us</Link></li>
        <li><Link to="/products">products</Link></li>
      </ul>
    </header>
  )
}

export default Header