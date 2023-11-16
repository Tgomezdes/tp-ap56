import React, { useState } from 'react';

const FormTarea = ({ AgregarTarea }) => {
  const [NombreTarea, setNombreTarea] = useState('');

  const CambiodeImput = (e) => {
    setNombreTarea(e.target.value);
  };

  const Enviar = (e) => {
    e.preventDefault();
    if (NombreTarea.trim() !== '') {
      AgregarTarea(NombreTarea);
      setNombreTarea('');
    }
  };

  return (
    <form onSubmit={Enviar}>
      <input type="text" value={NombreTarea} onChange={CambiodeImput} />
      <button type="submit">Agregar Tarea </button>
    </form>
  );
};

export default FormTarea;
