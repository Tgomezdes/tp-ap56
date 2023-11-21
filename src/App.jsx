import React, { useState } from 'react';
import Lista from './components/Lista';
import FormTarea from './components/FormTarea';

const App = () => {
  const [Tareas, setTareas] = useState([    //Se utiliza el hook useState para inicializar el estado de Tareas como un array vacío.

    // Se guardan las tareas nuevas 
  ]);

  const MarcarCompleto = (TareaId) => {
    setTareas((Tareaprevia) =>
    Tareaprevia.map((Tarea) =>
    Tarea.id === TareaId ? { ...Tarea, completed: !Tarea.completed } : Tarea
      )
    );
  };

  const Eliminar = (TareaId) => {
    setTareas((Tareaprevia) => Tareaprevia.filter((Tarea) => Tarea.id !== TareaId));
  };

  const Modificar = (TareaId, NuevoNombre) => {
     // Verifica si el nuevo nombre de la tarea ya existe en la lista
  const NombreDuplicado = Tareas.some((Tarea) => Tarea.name === NuevoNombre);

  // Si el nombre ya existe y no pertenece a la tarea actual, muestrar un mensaje, no modificar la tarea
  if (NombreDuplicado && Tareas.find((Tarea) => Tarea.id !== TareaId && Tarea.name === NuevoNombre)) {
    console.log('La tarea con este nombre ya existe.');
    return;
  }
  setTareas((Tareaprevia) =>
  Tareaprevia.map((Tarea) =>
  Tarea.id === TareaId ? { ...Tarea, name: NuevoNombre } : Tarea
      )
    );
  };

  const Agregar = (NombreTarea) => {

      // Verifica si el nombre de la tarea ya existe en la lista
  const NombreDuplicado = Tareas.some((Tarea) => Tarea.name === NombreTarea);

  // Si el nombre ya existe muestrar un mensaje, no agregar la tarea
  if (NombreDuplicado) {
    console.log('La tarea con este nombre ya existe.');
    return;
  }
    // Implementa la lógica para agregar una nueva tarea
    const NuevaTarea = {
      id: Tareas.length + 1,
      name: NombreTarea,
      completed: false,
    };
    
    setTareas((Tareaprevia) => [...Tareaprevia, NuevaTarea]);
  };

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
  </div>
  );
};

export default App;