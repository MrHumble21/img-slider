import React from 'react'
import data from  './data'
import lion1 from './assets/1.jpg'
// 'src/components/assets/4.jpg'

function Main() {
  return (
    <>
    <div className="container">
        <img
        className='img-responsive'
        src={lion1} alt="" />

        <button>prev</button>
        <button>next</button>
    </div>
    </>
  )
}

export default Main