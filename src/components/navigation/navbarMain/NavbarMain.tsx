import React, {useState} from "react"
import {Link} from "react-router-dom"
// import Login from "../../LogIn"

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  return (
    <nav className="bg-background-lt p-3  shadow-xl z-20">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center ">
          <div className="text-white font-semibold text-xl">
            Interview <span className="text-red-400">IQ</span>
          </div>
          {/* the line below is where we would put in tailwind to move the words to the right  */}
          <div className="hidden md:flex space-x-4">
            {/* The text shows up Peach because we have clicked on it before. Celeste/Youtube guy set it up in index.css file.*/}
            <a href="#" className="text-white hover:text-primary">
              Flashcards
            </a>
            <div
              className={`relative group ${
                isDropdownOpen ? "dropdown-open" : ""
              }`}
            >
              <button
                onClick={toggleDropdown}
                className="text-white hover:text-primary"
              >
                Options
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 space-y-2 bg-white text-gray-700 rounded-md shadow-lg">
                  <a href="#" className="block px-4 py-2 hover:text-primary">
                    Option 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:text-primary">
                    Option 2
                  </a>
                  <a href="#" className="block px-4 py-2 hover:text-primary">
                    Option 3
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="text-white hover:text-primary">
              About
            </a>
            <a href="#" className="text-white hover:text-primary">
              Contact
            </a>
          </div>
          <div className="flex items-center">
            {/* We can wrap this in the <Link> tag and route it over to the users page when we build it */}
            {/* <Link to={"./Login"}>
              <i className="fas fa-user text-white hover:text-primary cursor-pointer"></i>
            </Link> */}
          </div>
          <div className="md:hidden"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

// import React from 'react'

// const NavbarHome = () => {
//   return (
//     <div>NavbarHome</div>
//   )
// }

// export default NavbarHome
