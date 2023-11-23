import "./Elementos.css"
import React, { useState } from 'react';     //Importa React y useState desde 'react' para la gestión de estado.
import { Button, Input, ListItem, ListItemText } from '@mui/material'; // También importa varios componentes de Material-UI 
//(Button, Input, ListItem, ListItemText) para la interfaz de usuario.


const Elemento = ({ Tarea, MarcarCompleto, Eliminar, modificar }) => {//Declara un componente funcional llamado Elemento, que toma 
  //como propiedades (props) cuatro funciones: Tarea, MarcarCompleto, Eliminar, y modificar.
  const [NuevoDato, setNuevoDato] = useState(Tarea.name);             //Declara un estado local NuevoDato utilizando el hook useState. Inicializa 
  //su valor con el nombre de la tarea proporcionada (Tarea.name).    


  //Define una función CambioEntrada que actualiza el estado
  const CambioEntrada = (e) => {   // NuevoDato con el valor del evento de cambio (e.target.value), lo que refleja los cambios en el campo de entrada
    setNuevoDato(e.target.value);
  };

  const Modificarsalida = () => {    //Define una función Modificarsalida que llama a la función modificar pasándole el valor actualizado de NuevoDato
    modificar(NuevoDato);
  };
  {/* */ }
  return (

    <>
      <div className="columns">
        <h2>Nombre</h2>
        <h2>Edición</h2>
        <h2>Acciones</h2>
      </div>
      <div className="item" >
        <ListItem className="listItem" >
          <ListItemText //ListItemText: Es un componente de Material-UI que se utiliza para mostrar texto en un ítem de lista.
            primary={
              <span style={{
                textDecoration: Tarea.completo ? 'line-through' : 'none',
                fontWeight: Tarea.completo ? 'bold' : 'bold',
                fontSize: Tarea.completo ? '20px' : '20px',// Se aplica bold si la tarea no está completa
              }}>
                {Tarea.name}
              </span>
            }

          />
          <div className="btns">
            <Input type="text" value={NuevoDato} onChange={CambioEntrada} />{/*este código representa un campo de entrada de tipo texto  El valor del campo se actualiza dinámicamente a través del estado (NuevoDato),
                                                                      y cualquier cambio en el contenido del campo ejecutará la función CambioEntrada, que actualiza el estado con el nuevo valor del campo. */}

            <div className="todos__btns">
              <Button onClick={() => MarcarCompleto()} variant="contained" color="secondary"> {/*  se utiliza un onclick que al ser precionado el boton se llama la funcion MarcarComplto, se escribe asi porque nosotros queremos que el contenido que tiene guardado (this) sea ese y no modifique otro mas*/}
                Marcar como Completada
              </Button>

              <Button onClick={Modificarsalida} variant="contained" color="primary">{/*se utiliza un onclick que al ser precionado el boton se llama la funcion Modificarsalida, */}
                Modificar
              </Button>

              <Button onClick={() => Eliminar()} variant="contained" color="error">{/*se utiliza un onclick que al ser precionado el boton se llama la funcion Eliminar, se escribe asi porque nosotros queremos que el contenido que tiene guardado (this) sea ese y no modifique otro mas */}
                Eliminar
              </Button>
            </div>
          </div>
        </ListItem>
      </div>
    </>
  );



};

export default Elemento; // se exporta el los elementos 