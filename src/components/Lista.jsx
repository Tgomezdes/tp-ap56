import React from 'react';
import Elemento from './Elementos';

const Lista = ({ Tareas, MarcarCompleto, Eliminar, modificar }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      {Tareas.map((Tarea) => (
        <Elemento
          key={Tarea.id}
          Tarea={Tarea}
          MarcarCompleto={() => MarcarCompleto(Tarea.id)}
          Eliminar={() => Eliminar(Tarea.id)}
          modificar={(newName) => modificar(Tarea.id, newName)}
        />
      ))}
    </div>
  );
};

export default Lista;