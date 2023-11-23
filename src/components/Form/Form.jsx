import React, { useState } from 'react';
import "./Form.css";

export default function Form({products , setProducts , currentProduct , setCurrentProduct}) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProducts((prevProducts) => [...prevProducts, currentProduct]);
        setCurrentProduct({
            producto: '',
            cantidad: '',
            precio: '',
        });
    };

    return (
        <div>
            <form className='formulario' onSubmit={handleSubmit}>
                <section>
                <div>
                    <label htmlFor="producto">Ingrese un producto</label>
                    <input
                        onChange={handleChange}
                        value={currentProduct.producto}
                        type="text"
                        name='producto'
                        id='producto'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="cantidad">Ingrese la cantidad</label>
                    <input
                        onChange={handleChange}
                        value={currentProduct.cantidad}
                        type="number"
                        name='cantidad'
                        id='cantidad'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="precio">Ingrese el precio</label>
                    <input
                        onChange={handleChange}
                        value={currentProduct.precio}
                        type="number"
                        name='precio'
                        id='precio'
                        required
                    />
                </div>
                </section>
                <button className='enviar'>Agregar tarea</button>
            </form>



         
        </div>
    );
}
