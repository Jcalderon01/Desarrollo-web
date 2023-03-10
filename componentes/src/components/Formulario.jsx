import React from 'react'
import "../styles/formularioStyle.css"

const Formulario = () => {
  return (
    <div className="container">
      <h1>FORMULARIO</h1>
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" />
        <label htmlFor="apellido">Apellido</label>
        <input type="text" />
        <label htmlFor="edad">Edad</label>
        <input type="text" />
        <label htmlFor="semestre">Semestre</label>
        <input type="text" />

        <input type="button" value="Enviar" />
      </form>
    </div>
  )
}

export default Formulario
