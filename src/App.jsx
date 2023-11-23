import React, { useState } from 'react';
import Form from './components/Form/Form';
import {Button} from "@mui/material"
import TaskList from './components/TaskLIst/TaskList';
import "./style.css"


const App = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
      producto: '',
      cantidad: '',
      precio: '',
  });


  return (
    <div className='container'>
      <Form 
       products = {products}
       setProducts = {setProducts}
       currentProduct = {currentProduct}
       setCurrentProduct = {setCurrentProduct}
      />
      <TaskList 
      products = {products}    
       
      />
    <Button></Button>
    </div>
  );
};

export default App;