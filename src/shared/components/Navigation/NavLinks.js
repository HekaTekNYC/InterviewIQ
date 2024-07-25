import React, {useContext} from "react"
import {NavLink} from "react-router-dom"

import {AuthContext} from "../../context/auth-context"
import "./NavLinks.css"

const NavLinks = props => {
  const auth = useContext(AuthContext)

  return (
    <ul className="nav-links">
      {/* Public Links */}
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>

      {/* Conditional Links Based on Authentication */}
      {auth.isLoggedIn && (
        <>
          <li>
            <NavLink to={`/${auth.userId}/flashcards`}>MY FLASHCARDS</NavLink>
          </li>
          <li>
            <NavLink to="/flashcards/new">ADD FLASHCARDS</NavLink>
          </li>
          <li>
            <button onClick={auth.logout}>LOGOUT</button>
          </li>
        </>
      )}

      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">Login</NavLink>
        </li>
      )}
    </ul>
  )
}

export default NavLinks
