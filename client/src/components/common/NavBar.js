import React from 'react'
// import { Link } from 'react-router-dom'
import { Button, Link } from '@material-ui/core'

const NavBar = () => {
  return (
    <Link component='button' href='/' onClick={(e) => e.preventDefault} >Home</Link>
  )
}

export default NavBar