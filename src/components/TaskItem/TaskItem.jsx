import React, { useEffect, useState } from 'react';

export default function TaskItem({ producto }) {
  const [showAlert, setShowAlert] = useState(false);
  const [oneProduct, setOneProduct] = useState(producto);
  const [editar, setEditar] = useState(false);

  const deleteProduct = () => {
    setOneProduct({
      producto: "",
      cantidad: "",
      precio: "",
    });
    setShowAlert(true);
  };

  const editarProduct = () => {
    setEditar(true);
  };

  const handleChange = (e) => {
   const {name,value}=e.target
    setOneProduct((prevProduct) => ({
      ...prevProduct,
      [name] : value
    }));
  };

  const handleBlur = () => {
    setEditar(false);
  };

  useEffect(() => {
    if (showAlert) {
      console.log("#WAFDWDAWD");
      setShowAlert(false);
    }
  }, [showAlert]);

  return (
    <>
      {editar ? (
        <tr key={oneProduct.producto}>
          <td>
            <input

              name="producto"
              value={oneProduct.producto}
              onChange={handleChange}
 
            />
          </td>
          <td>
            <input
              type="number"
              name="cantidad"
              value={oneProduct.cantidad}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="number"
              name="precio"
              value={oneProduct.precio}
              onChange={handleChange}
            />
          </td>
          <td>
            <button >Guardar</button>
          </td>
        </tr>
      ) : (
        oneProduct.producto && (
          <tr key={oneProduct.producto}>
            <td>{oneProduct.producto}</td>
            <td>{oneProduct.cantidad}</td>
            <td>{oneProduct.precio}</td>
            <td>
              <button onClick={deleteProduct}>Eliminar</button>
            </td>
            <td>
              <button onClick={editarProduct}>Editar</button>
            </td>
            <td>
              <button>Chekear</button>
            </td>
          </tr>
        )
      )}
    </>
  );
}
