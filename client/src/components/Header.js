import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <p className='logo'>User Management System</p>
        <div className='header-right'>
            <Link to="/"><p>Home</p></Link>
            <Link to="/add"><p>Add User</p></Link>
            <Link to="/about"><p>About</p></Link>
        </div>
    </div>
  )
}

export default Header