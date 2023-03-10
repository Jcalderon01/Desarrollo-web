import React from 'react'
import PropTypes from "prop-types"

const Portada = ({titulo="desarrollo web 1",fecha="1900"}) => {

const nuevoMensaje = {
    mensaje: "Hola Desarrollo Web 1",
    title: "Programacion web"
};

  return (
    <div>
        <h1>{titulo}</h1>
        <h3>{fecha}</h3>
        <h4>{nuevoMensaje.title}</h4>
    </div>
  )
}

Portada.propTypes = {
    titulo: PropTypes.string
}

export default Portada