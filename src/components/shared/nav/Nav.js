import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="mt-2">
            <NavLink to="/login" className="m-5 mt-5 btn btn-link" activeClassName="btn btn-primary text-white">
                Login
            </NavLink>
            <NavLink to="/register" className="m-5 mt-5 btn btn-link" activeClassName="btn btn-primary text-white">
                Register
            </NavLink>
        </nav>
    )
}
export default Nav
