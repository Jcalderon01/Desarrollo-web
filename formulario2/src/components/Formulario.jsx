import React, { useEffect, useState } from "react";

const Formulario = ({ estudiantes, setEstudiantes, estudiante }) => {
  const [nombre, setNombre] = useState("");
  const [carrerra, setCarrerra] = useState("");
  const [semestre, setSemestre] = useState("");
  const [promedio, setPromedio] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(estudiante).length > 0) {
      const { nombre, carrerra, semestre, promedio } = estudiante;
      setNombre(nombre);
      setCarrerra(carrerra);
      setSemestre(semestre);
      setPromedio(promedio);
    }
  }, [estudiante]);

  const generarID = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return random + fecha;
  };

  const manejadorSubmit = (e) => {
    e.preventDefault();
    if (
      [
        nombre.trim(),
        carrerra.trim(),
        semestre.trim(),
        promedio.trim(),
      ].includes("")
    ) {
      setError(true);
      return;
    }
    setError(false);
    const objetoEstudiante = {
      nombre,
      carrerra,
      semestre,
      promedio,
    };

    if (estudiante.id) {
      objetoEstudiante.id = estudiante.id;
      const estudiantesActualizados = estudiantes.map((estudianteState) =>
        estudianteState.id === estudiante.id
          ? objetoEstudiante
          : estudianteState
      );
      setEstudiantes(estudiantesActualizados);
    } else {
      objetoEstudiante.id = generarID();
      setEstudiantes([...estudiantes, objetoEstudiante]);
    }

    limpiar();
  };
  //implementar local storage

  const limpiar = () => {
    setNombre("");
    setCarrerra("");
    setSemestre("");
    setPromedio("");
  };

  return (
    <div className="md:w-1/2 bg-gray-600 rounded-md p-5 text-white">
      <h1 className="font-bold text-xl">Registro de estudiantes</h1>
      <h2>Agrega estudiantes</h2>
      <form onSubmit={manejadorSubmit}>
        {error && (
          <div className="bg-red-800 rounded-md font-bold text-center mt-4 p-1 uppercase">
            <p>Llena todos los campos</p>
          </div>
        )}
        <div>
          <label className="block pt-2 ">Nombre paciente</label>
          <input
            type="text"
            className="border-2 w-full rounded-md text-black"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <label className="block">Carrera</label>
          <input
            type="text"
            className="border-2 w-full rounded-md text-black"
            placeholder="Carrera"
            value={carrerra}
            onChange={(e) => setCarrerra(e.target.value)}
          />
          <label className="block">Semestre</label>
          <input
            type="text"
            className="border-2 w-full rounded-md text-black"
            placeholder="Semestre"
            value={semestre}
            onChange={(e) => setSemestre(e.target.value)}
          />
          <label className="block">Promedio</label>
          <input
            type="text"
            className="border-2 w-full rounded-md text-black"
            placeholder="Promedio"
            value={promedio}
            onChange={(e) => setPromedio(e.target.value)}
          />
        </div>
        <div>
          <input
            type="submit"
            className="bg-black p-2 uppercase hover:bg-red mt-2 rounded-md"
            value={estudiante.id ? "Actualizar" : "Agregar estudiane"}
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
