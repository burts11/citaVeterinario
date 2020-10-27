import React, { Fragment, useState } from "react";
import Formulario from "./Componentes/Formulario";
import Cita from "./Componentes/Cita";

function App() {
  //Array de citas
  const [citas, almacenarCitas] = useState([]);

  // Función que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    almacenarCitas([...citas, cita]);
    console.log(cita);
  };

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            {citas.map(cita => (
                <Cita 
                key={cita.id}
                cita={cita}
                
                />
            ))}
            

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
