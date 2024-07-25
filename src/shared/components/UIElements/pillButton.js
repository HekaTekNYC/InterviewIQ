import React from "react"
import "./pillButton.styles.css"

const PillButton = props => {
  return (
    <div className="b mx-auto h-16 w-64 flex justify-center items-center">
      <div className="i h-12 w-56 bg-gradient-to-r from-red-300 to-red-500 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
      <a className="text-center text-white font-semibold z-10 pointer-events-none transition-transform hover:text-2xl">
        {props.text}
      </a>
    </div>
  )
}

export default PillButton
