import {Link} from "react-router-dom"

import "./navbar-main.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          Interview <span className="accent">IQ</span>
        </div>
        <div className="nav-links">
          <Link to="/flashcards" className="nav-link">
            Practice
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
