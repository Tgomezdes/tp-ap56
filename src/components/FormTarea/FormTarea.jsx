import React, { useState } from 'react';
import "./FormTarea.css"

const FormTarea = ({ AgregarTarea }) => { //Declara un componente funcional llamado FormTarea que recibe una prop llamada AgregarTarea.
  const [NombreTarea, setNombreTarea] = useState(''); //Declara un estado local NombreTarea utilizando el hook useState. Inicializa su valor como una cadena vacía.
  
  const CambiodeImput = (e) => {    //Define una función CambiodeImput que actualiza el estado 
    setNombreTarea(e.target.value); //NombreTarea con el valor del evento de cambio (e.target.value), lo que refleja los cambios en el campo de entrada.
  };

  const Enviar = (e) => {   //Define una función Enviar que se ejecutará cuando se envíe el formulario.
    e.preventDefault();     // Utiliza e.preventDefault() para evitar la recarga de la página por defecto del formulario.
    if (NombreTarea.trim() !== '') { //Verifica si NombreTarea.trim() !== '' para asegurarse de que la tarea no esté vacía después de eliminar los espacios en blanco al principio y al final.
      AgregarTarea(NombreTarea); //Llama a la función AgregarTarea pasándole NombreTarea como argumento para agregar la tarea
      setNombreTarea(''); //pone el estado NombreTarea a una cadena vacía para limpiar el campo de entrada después de agregar la tarea.
    }
  };

  return (
    <form className='form__principal' onSubmit={Enviar}> {/* Define un formulario que utiliza la función Enviar, se utiliza el prop onSubmit para saber que tipo de formulario es*/}
      <input type="text" value={NombreTarea} onChange={CambiodeImput} />{/* se crea un imput que caudno se vaya escribiendo en el se vaya guardando en NombreTarea */}
      <button type="submit">Agregar Tarea </button>{/* se crea un boton con el tipo sumbit para enviar el formulario */}
    </form>
  );
};

export default FormTarea;
