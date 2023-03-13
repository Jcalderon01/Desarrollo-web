import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Listado from "./components/Listado";

function App() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudiante, setEstudiante] = useState({});

  function eliminarEstudiante(id) {
    setEstudiantes(estudiantes.filter((estudiante) => estudiante.id !== id));
  }

  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-12 md:flex m-5 gap-4 ">
        <Formulario
          estudiantes={estudiantes}
          setEstudiantes={setEstudiantes}
          estudiante={estudiante}
          setEstudiante={setEstudiante}
        />
        <Listado
          estudiantes={estudiantes}
          setEstudiante={setEstudiante}
          eliminarEstudiante={eliminarEstudiante}
        />
      </div>
    </div>
  );
}

export default App;
