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
{/* */}
  return (
   
    <ListItem> 
    <ListItemText //ListItemText: Es un componente de Material-UI que se utiliza para mostrar texto en un ítem de lista.
      primary={ //primary: Es una propiedad de ListItemText que acepta un elemento React como su valor. En este caso, se utiliza un elemento span como contenido principal.
        <span style={{ textDecoration: Tarea.completo ? 'line-through' : 'none' }}> {/*textDecoration: Tarea.completo ? 'line-through' : 'none': Este estilo dinámico aplica una línea a través del texto si la tarea está completada (Tarea.completed es true), de lo contrario, no aplica ninguna decoración. */} 
          {Tarea.name}    {/* Tarea.name tare el nombre de la tarea, si la condicion completo es un verdadero entonces se le muestra tachado caso contrario se muestra comun*/}  
        </span>
      }
      
    />
    <Input type="text" value={NuevoDato} onChange={CambioEntrada} />{/*este código representa un campo de entrada de tipo texto  El valor del campo se actualiza dinámicamente a través del estado (NuevoDato),
                                                                      y cualquier cambio en el contenido del campo ejecutará la función CambioEntrada, que actualiza el estado con el nuevo valor del campo. */}

    <Button onClick={() => MarcarCompleto()} variant="contained" color="secondary"> {/*  se utiliza un onclick que al ser precionado el boton se llama la funcion MarcarComplto, se escribe asi porque nosotros queremos que el contenido que tiene guardado (this) sea ese y no modifique otro mas*/}
      Marcar como Completada
    </Button>
    
    <Button onClick={Modificarsalida} variant="contained" color="primary">{/*se utiliza un onclick que al ser precionado el boton se llama la funcion Modificarsalida, */}
      Modificar
    </Button>

    <Button onClick={() => Eliminar()} variant="contained" color="error">{/*se utiliza un onclick que al ser precionado el boton se llama la funcion Eliminar, se escribe asi porque nosotros queremos que el contenido que tiene guardado (this) sea ese y no modifique otro mas */}
      Eliminar
    </Button>
  </ListItem>

  );


  
};

export default Elemento; // se exporta el los elementos 