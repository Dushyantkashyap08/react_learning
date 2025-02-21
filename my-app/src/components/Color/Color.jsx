import React from 'react'

const Color = ({colorChange, clicks, style, getClick, color, divRef}) => {
  return (
    <div ref={divRef} className="color-container"  style={{...style}} onClick={getClick}>
      <button onClick={colorChange}>Color</button>
      <p>Clicks on the page :{clicks}</p>
    </div>
  )
}

export default Color
