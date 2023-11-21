import React, { useState } from 'react';
import Form from './components/Form/Form';
import "./style.css"

const App = () => {
  const [producto, setProducto] = useState("")
  const [cantidad, setCantidad] = useState("")
  const [precio, setPrecio] = useState("")
  
  return (
    <div className='container'>
       <Form 
       producto = {producto}
       setProducto = {setProducto}
       cantidad = {cantidad}
       setCantidad = {setCantidad}
       precio = {precio}
       setPrecio = {setPrecio}
        />
    </div>
  );
};

export default App;