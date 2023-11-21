import React, { useState } from 'react'
import "./Form.css"
export default function Form({producto,setProducto , cantidad,setCantidad,precio,setPrecio}) {

    const handleInput = (event) => {

        const { name, value } = event.target

        switch (name) {
            case "producto":
                setProducto(value)
                break;
            case "cantidad":
                setCantidad(value)
                break;

            case "precio":
                setPrecio(value)
                break;
            default:
                break;
        }
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        setProducto("")
        setCantidad("")
        setPrecio("")
    }

    return (
        <div >
            <form className='formulario' action="">

                <div >
                    <label htmlFor="producto" >Ingrese un producto</label>
                    <input
                        onChange={handleInput}
                        value={producto}
                        type="text"
                        name='producto'
                        id='producto' />
                </div>
                <div>
                    <label htmlFor="cantidad" >Ingrese la cantidad</label>
                    <input
                        onChange={handleInput}
                        value={cantidad}
                        type="number"
                        name='cantidad'
                        id='cantidad' />
                </div>
                <div>
                    <label htmlFor="precio" >Ingrese el precio</label>
                    <input
                        onChange={handleInput}
                        value={precio}
                        type="number"
                        name='precio'
                        id='precio' />
                </div>
                <button className='enviar' onSubmit={onSubmit} >Agregar tarea</button>
            </form>


        </div>
    )
}
