
import React, { useState, useEffect } from 'react';
import Lista from './components/Lista';// se trae la lista
import FormTarea from './components/FormTarea'; // se trae los elementos del formulario de tareas
import Alert from '@mui/material/Alert';// se utiliza para mostrar alertas
import Fade from '@mui/material/Fade'; //fade aplica efecto de desaparecimiento

const App = () => {//Se utiliza el hook useState para definir cuatro estados locales (Tareas, mostrarAlerta, mensajeAlerta, y tipoAlerta).
  
  //const [Tareas, setTareas] = useState([]); // en este se guarda las tareas ya que es el array vacio

  const [Tareas, setTareas] = useState(() => {
    // Intenta obtener las tareas desde localStorage
    const storedTareas = localStorage.getItem('tareas');
    // Si hay datos en localStorage, los parsea, de lo contrario, establece un array vacío
    return storedTareas ? JSON.parse(storedTareas) : [];
  });


  const [mostrarAlerta, setMostrarAlerta] = useState(false); // se utiliza para mostar la alerta de  que se agrego,elimino,modifico,tacho
  const [mensajeAlerta, setMensajeAlerta] = useState('');// se utiliza para mostar el mensaje de  que se agrego,elimino,modifico,tacho
  const [tipoAlerta, setTipoAlerta] = useState('success'); // este se utiliza para mostar el tipo de color que va a aparecer 

  const MarcarCompleto = (TareaId) => { // MarcarCompleto toma la id de la tarea 
    setTareas((Tareaprevia) => // se crea un array nuevo 
      Tareaprevia.map((Tarea) => // Utiliza el método map en el array Tareaprevia para iterar sobre cada tarea en el array.
        Tarea.id === TareaId ? { ...Tarea, completo: !Tarea.completo } : Tarea  //En cada iteración, verifica si el id de la tarea actual es igual al TareaId proporcionado. 
      )                                                                          //Si es así, le pone el tachado a la tarea encontrada y la propidad completo cambia el valor al inverso osea que si es true pasa a false
    );                                                                           // Si no coincide la id  simplemente devuelve la tarea sin cambios.
   
  };

  const Eliminar = (TareaId) => {
    const tareaEliminada = Tareas.find((Tarea) => Tarea.id === TareaId); // crea una cosntante donde se utiliza el metodo find (buscar) y busca la tarea que coincidan

    if (tareaEliminada) { // si se encontro
      setTareas((Tareaprevia) => Tareaprevia.filter((Tarea) => Tarea.id !== TareaId)); // si se encuentra la tareautiliza el método filter para crear un nuevo array de tareas 
                                                                                       //excluyendo la tarea  encontrada. Luego, utiliza setTareas para actualizar el estado de las tareas con el nuevo array.
      mostrarMensaje(`Tarea  eliminada con éxito.`, 'error'); // utiliza la funcion mostrarMensaje pasandole el parameto "Tarea  eliminada con éxito" y el tipo de color , en este caso error que serai rojo
    }
  };

  const Modificar = (TareaId, NuevoNombre) => {
    const NombreDuplicado = Tareas.some((Tarea) => Tarea.name === NuevoNombre); // se crea una cosntante donde se utiliza el metodo some para saber si hay alguna tarea igual a la que acabamos de escribir

    if (NombreDuplicado && Tareas.find((Tarea) => Tarea.id !== TareaId && Tarea.name === NuevoNombre) ) // si el nombre esta duplicado y busca con el find alguna tarea con ese mismo nombre pero diferente id
  {
      mostrarMensaje("La tarea con este nombre ya existe.", 'warning'); // utiliza la funcion mostrarMensaje pasandole el parameto "La tarea con este nombre ya existe." y el tipo de color , en este caso warning que seria amarillo
      return;
  }
    setTareas((Tareaprevia) => // se crea un array nuevo y se hace un map y va comparando las id,si la encuentra entonces se le cambia el name con el NuevoNombre, pero si no se encuentra devuelve el array sin cambio 
      Tareaprevia.map((Tarea) =>
        Tarea.id === TareaId ? { ...Tarea, name: NuevoNombre } : Tarea
      )
    );
    mostrarMensaje('Tarea modificada con éxito.', 'info');//utiliza la funcion mostrarMensaje pasandole el parameto "Tarea modificada con éxito" y el tipo de color , en este caso info que seria azul
  };

  const Agregar = (NombreTarea) => {
    const NombreDuplicado = Tareas.some((Tarea) => Tarea.name === NombreTarea);// se crea una cosntante donde se utiliza el metodo some para saber si hay alguna tarea igual a la que acabamos de escribir

    if (NombreDuplicado) { //si  existe duplicado entonces utiliza la funcion mostrarMensaje pasandole el parameto "La tarea con este nombre ya existe" y el tipo de color , en este caso warning que seria amarillo
      mostrarMensaje("La tarea con este nombre ya existe.", 'warning');
      
      return;
    }

    const NuevaTarea = {
      id: Tareas.length + 1,//Asigna un nuevo id a la tarea. Toma la longitud del array actual de tareas (Tareas.length) y le suma 1 para garantizar que cada tarea tenga un id único
      name: NombreTarea,//Asigna el nombre de la tarea proporcionado (NombreTarea).
      completo: false, //completo es un booleano y empieza en falso
    };

    setTareas((Tareaprevia) => [...Tareaprevia, NuevaTarea]); // se agrega NuevaTarea al array de Tareaprevia  
    
    mostrarMensaje(`Tarea  agregada con éxito.`, 'success');//utiliza la funcion mostrarMensaje pasandole el parameto "Tarea  agregada con éxito" y el tipo de color , en este caso success que seria verde
  };

  const mostrarMensaje = (mensaje, tipo = 'success') => { //mostrarMensaje tiene 2 parametros mensaje y tipo 
    setMensajeAlerta(mensaje); //setea el mensaje 
    setTipoAlerta(tipo); //setea el  tipo
    setMostrarAlerta(true); //setea  para mostrar  o no 

    // Oculta la alerta después de 2000 milisegundos (2 segundos)
    setTimeout(() => {
      setMostrarAlerta(false);
    }, 2000);
  };

  /*useEffect(() => {
    console.log('La lista de tareas ha sido actualizada:', Tareas);
  }, [Tareas]);*/
   
  // Efecto para almacenar en localStorage cuando Tareas cambia
   useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(Tareas));
  }, [Tareas]);

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <FormTarea AgregarTarea={Agregar} />
      <Lista
        Tareas={Tareas}
        MarcarCompleto={MarcarCompleto}
        Eliminar={Eliminar}
        modificar={Modificar}
      />
      
        <Fade in={mostrarAlerta}>
          <Alert variant="filled" severity={tipoAlerta}> {/* tipo de variante de filled  */}
            {mensajeAlerta}
          </Alert>
        </Fade>
      
    </div>
  );
};

export default App;