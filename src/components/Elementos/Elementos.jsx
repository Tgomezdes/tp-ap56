import "./Elementos.css"
import React, { useState } from 'react';    
import { Button, Input, ListItem, ListItemText } from '@mui/material'; 


const Elemento = ({ Tarea, MarcarCompleto, Eliminar, modificar }) => {
  const [NuevoDato, setNuevoDato] = useState(Tarea.name);           


  
  const CambioEntrada = (e) => {   
    setNuevoDato(e.target.value);
  };

  const Modificarsalida = () => {    
    modificar(NuevoDato);
  };

  return (

    <>
      <div className="columns">
        <h2>Nombre</h2>
        <h2>Edición</h2>
        <h2>Acciones</h2>
      </div>
      <div className="item" >
        <ListItem className="listItem" >
          <ListItemText 
            primary={
              <span style={{
                textDecoration: Tarea.completo ? 'line-through' : 'none',
                fontWeight: Tarea.completo ? 'bold' : 'bold',
                fontSize: Tarea.completo ? '20px' : '20px',
              }}>
                {Tarea.name}
              </span>
            }

          />
          <div className="btns">
            <Input type="text" value={NuevoDato} onChange={CambioEntrada} />
            <div className="todos__btns">
              <Button onClick={() => MarcarCompleto()} variant="contained" color="secondary"> 
                Marcar como Completada
              </Button>

              <Button onClick={Modificarsalida} variant="contained" color="primary">
                Modificar
              </Button>

              <Button onClick={() => Eliminar()} variant="contained" color="error">
                Eliminar
              </Button>
            </div>
          </div>
        </ListItem>
      </div>
    </>
  );



};

export default Elemento; 