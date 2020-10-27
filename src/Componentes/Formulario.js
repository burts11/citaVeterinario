import React, { Fragment, useState } from "react";
import {v4 as uuid} from 'uuid';
import PropTypes from "prop-types";


const Formulario = ({crearCita}) => {


  //Crear State de citas
  const [cita, actualizaCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, actualizaError] = useState(false);

  // Función que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = (evento) => {
    actualizaCita({
      ...cita,
      [evento.target.name]: evento.target.value,
    });
    //  console.log("escribiendo..." +evento.target.value);
  };

  //Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Cuando el usuario envia el formulario
  const submitCita = (e) => {
    e.preventDefault();

    //validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizaError(true);
      return;
    }
    //Eliminar mensaje previo de error
    actualizaError(false);

    //asignar un ID
    cita.id = uuid();
    
    //Crear la cita
    crearCita(cita)
    //Reiniciar el form
    actualizaCita({
        mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",

    })

  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label>Nombre de Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre del Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre propietario"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Descripción de sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          AGREGAR CITA
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;
