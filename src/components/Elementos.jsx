import React, { useState } from 'react';

const Elemento = ({ Tarea, MarcarCompleto, Eliminar, modificar }) => {
  const [NuevoDato, setNuevoDato] = useState(Tarea.name);

  const CambioEntrada = (e) => {
    setNuevoDato(e.target.value);
  };

  const Modificarsalida = () => {
    modificar(NuevoDato);
  };

  return (
    <div>
      <span style={{ textDecoration: Tarea.completed ? 'line-through' : 'none' }}>{Tarea.name}</span>
      <button onClick={() => MarcarCompleto()}>Marcar como Completada</button>
      <button onClick={() => Eliminar()}>Eliminar</button>
      <input type="text" value={NuevoDato} onChange={CambioEntrada} />
      <button onClick={Modificarsalida}>Modificar</button>
    </div>
  );
};

export default Elemento;