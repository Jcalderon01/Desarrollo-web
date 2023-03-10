import PropTypes from "prop-types"
import { useState } from "react"
useState

export const Contador = ({contador}) =>{

    const [valor, setValor] = useState(contador)


    const handleAdd=(event)=>{
        setValor(valor+1);

    }
    const handleAdd2=(event)=>{
        setValor(valor-1);

    }
    const handleAdd3=(event)=>{
        setValor(contador);

    }

    return(
        <div>
           <h1> Contador App</h1>
            <h2>{valor}</h2>

            <button onClick={handleAdd}>   +1</button>
            <button onClick={handleAdd2}>   -1</button>
            <button onClick={handleAdd3}>   reset</button>
        </div>
    )

    //para mandar parametros requeridos
    Contador.propTypes = {
        contador: PropTypes.number.isRequired
    }

}