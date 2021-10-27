import React from 'react'

import './spinner.styles.css'

const Spinner = () => {
  return (
    <div className="muxic__song-result__loader">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Spinner
