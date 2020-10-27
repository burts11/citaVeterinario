import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./Componentes/Formulario";
import Cita from "./Componentes/Cita";

function App() {
  //Citas en LocalStorage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //Array de citas
  const [citas, almacenarCitas] = useState(citasIniciales);

  // useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if(citasIniciales){
      localStorage.setItem("citas",JSON.stringify(citas))
    }else{
      localStorage.setItem("citas",JSON.stringify([]))
    }
  }, [citas]);

  // Función que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    almacenarCitas([...citas, cita]);
    console.log(cita);
  };

  // Elimanar cita por su ID
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    almacenarCitas(nuevasCitas);
  };
  //Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus Citas";

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <h2>{titulo}</h2>
          <div className="one-half column">
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
