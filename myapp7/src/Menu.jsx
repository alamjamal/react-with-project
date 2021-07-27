import React from 'react'
//import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <>
        <NavLink exact activaClassName="active_class" to='/'>About Us</NavLink>
        <NavLink exact activaClassName="active_class" to='/contact'>Contact </NavLink>
        </>
    )
}

export default Menu

/* <Link to='/'>About Us</Link>
<Link to='/contact'>Contact </Link> */