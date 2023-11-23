import React, { useState } from 'react';
import "./FormTarea.css"

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
    <form className='form__principal' onSubmit={Enviar}> 
      <input type="text" value={NombreTarea} onChange={CambiodeImput} />
      <button type="submit">Agregar Tarea </button>
    </form>
  );
};

export default FormTarea;
