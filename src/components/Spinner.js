import React from 'react'
import loading from './kOnzy.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img width={50} src={loading} alt='Spinner'/>
    </div>
  )
}

export default Spinner
