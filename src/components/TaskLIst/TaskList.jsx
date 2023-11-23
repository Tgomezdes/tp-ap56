import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import "./TaskList.css"
export default function TaskList({ products }) {

  return (<>
      {products.length > 0 ? (
    <div className='list'>
        <table className="tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Eliminar</th>
              <th>Editar</th>
              <th>Confirmar</th>
            </tr>
          </thead>
          <tbody>
            {products.map((producto ) => (
             <TaskItem key={producto.producto} producto = {producto} />
            ))}
          </tbody>
        </table>
    </div>
      ): (
        <p className='ninguna'> Ningun producto añadido </p>
      )}
    </>
  );
}

