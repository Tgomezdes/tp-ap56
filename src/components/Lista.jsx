import React from 'react';
import Elemento from './Elementos'; // importa los elemenotos del archivo elementos

const Lista = ({ Tareas, MarcarCompleto, Eliminar, modificar }) => { // se declaran las variables Tareas, MarcarCompleto, Eliminar, modificar
  return (
    <div>
      <h2>Lista de Tareas</h2>
      {Tareas.map((Tarea) => ( //Utiliza el método map para iterar sobre la matriz de tareas (Tareas). Por cada tarea, se renderiza un componente Elemento, es decir que por cada elemento agregado se mostrara el el nombre el boton modificar, eliminar, marcar completo
        <Elemento
          key={Tarea.id} // se le proporciona una key a cada tarea creada para ser unica
          Tarea={Tarea} // pasa la tarea actual  escrita como elemento a elementos.jsx
          MarcarCompleto={() => MarcarCompleto(Tarea.id)} //pasa la funcion anonima a elementos con el marcarcompleto y la id de la tarea actual, despues en elementos cuando se llama se utiliza esa id de la tarea espesifica
          Eliminar={() => Eliminar(Tarea.id)}//pasa la funcion anonima a elementos con el Eliminar y la id de la tarea actual,despues en elementos cuando se llama se utiliza esa id de la tarea espesifica
          modificar={(Nuevonombre) => modificar(Tarea.id, Nuevonombre)} // se le pasa una funcion anonima a elementos con la id de la tarea previa y el nuevo nombrew que pusimos
        />
      ))}
    </div>
  );
};

export default Lista;