import React from 'react';
import Elemento from '../Elementos/Elementos';
import "./Lista.css"
const Lista = ({ Tareas, MarcarCompleto, Eliminar, modificar }) => { 
  return (
    <div className='lista'>
      <h2>Lista de Tareas</h2>
      {Tareas.length > 0 ? Tareas.map((Tarea) => (
        <Elemento
          key={Tarea.id} 
          Tarea={Tarea}
          MarcarCompleto={() => MarcarCompleto(Tarea.id)} 
          Eliminar={() => Eliminar(Tarea.id)}
          modificar={(Nuevonombre) => modificar(Tarea.id, Nuevonombre)} 
        />
      )): (
        <p className='ingresar'>Ingrese Una Tarea...</p>
      )}
    </div>
  );
};

export default Lista;