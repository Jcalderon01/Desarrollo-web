import React from 'react'
import "../styles/cabeceraStyle.css"

const Cabecera = ({titulo}) => {
  return (
    <div className='cabeza'>
      <h1>{titulo}</h1>
    </div>
  )
}

export default Cabecera
