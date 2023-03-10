import React from "react";
import Estudiante from "./Estudiante";

const Listado = ({ estudiantes, setEstudiante }) => {
  return (
    <div className="md:w-1/2 bg-gray-600 rounded-md p-5 text-white md:overflow-y-scroll h-screen ">
      <h1 className="font-bold text-xl">Listado de estudintes</h1>
      <h2>Administyrta Estudiantes</h2>

      {estudiantes.map((estudiante) => (
        <Estudiante
          key={estudiante.id}
          estudiante={estudiante}
          setEstudiante={setEstudiante}
        />
      ))}
    </div>
  );
};

export default Listado;
