import React from "react";

const Estudiante = ({ estudiante, setEstudiante }) => {
  const { nombre, carrerra, semestre, promedio } = estudiante;

  return (
    <div className="pt-2 bg-slate-500 rounded-md mt-2 p-2">
      <p className="font-bold mb-2 uppercase">
        Nombre: <span className="font-normal ml-3 normal-case ">{nombre}</span>
      </p>
      <p className="font-bold mb-2 uppercase">
        Carrera:{" "}
        <span className="font-normal ml-3 normal-case ">{carrerra}</span>
      </p>
      <p className="font-bold mb-2 uppercase">
        Semestre:{" "}
        <span className="font-normal ml-3 normal-case ">{semestre}</span>
      </p>
      <p className="font-bold mb-2 uppercase">
        Promedio:{" "}
        <span className="font-normal ml-3  normal-case">{promedio}</span>
      </p>
      <div>
        <button
          className="bg-black p-2 uppercase hover:bg-red mt-2 rounded-md "
          onClick={() => setEstudiante(null)}
        >
          Eliminar
        </button>
        <button
          className="bg-black p-2 uppercase hover:bg-red mt-2 rounded-md ml-2 "
          onClick={() => setEstudiante(estudiante)}
        >
          Modificar
        </button>
      </div>
    </div>
  );
};

export default Estudiante;
