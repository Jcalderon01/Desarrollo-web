import React from "react";
import Estudiante from "./Estudiante";

const Listado = ({ estudiantes, eliminarEstudiante, setEstudiante }) => {
  return (
    <div className="md:w-1/2 bg-gray-600 rounded-md p-5 text-white md:overflow-y-scroll h-screen ">
      <h1 className="font-bold text-xl">Listado de estudiantes</h1>
      <h2>Administrar Estudiantes</h2>

      {estudiantes.map((estudiante) => (
        <Estudiante
          key={estudiante.id}
          estudiante={estudiante}
          eliminarEstudiante={eliminarEstudiante}
          setEstudiante={setEstudiante}
        />
      ))}
    </div>
  );
};

export default Listado;
