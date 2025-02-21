import React from 'react'

const ToggleBackground = ({toggleBackground, style, col}) => {
  return (
    <div>
      <div style={{ ...style, backgroundColor: col }}>
        <button onClick={toggleBackground}>Toggle Background</button>
      </div>
    </div>
  )
}

export default ToggleBackground
