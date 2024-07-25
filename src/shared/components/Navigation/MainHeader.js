import React from "react"

import "./MainHeader.css"

const MainHeader = (props) => {
  return <header className="main-header px-5">{props.children}</header>
}

export default MainHeader
