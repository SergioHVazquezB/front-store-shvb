import React from 'react'
import { useNavigate } from 'react-router-dom';
const ProdcutoView = ({handler,id, nombre, descripcion, precio}) => {
  
  const navigate = useNavigate();
  
  const agregarProducto = (producto) => {
    console.log("Producto:", producto);
    handler(producto);
    navigate("/carrito");
  }
  return (
    <>
          <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">{descripcion}</p>
                        <p className="card-text">Precio ${precio}</p>
                        <button className="btn btn-primary" 
                          onClick={()=> agregarProducto({id, nombre, descripcion, precio})}>Agregar al carrito</button>
                    </div>
                </div>       
    </>
  )
}

export default ProdcutoView
