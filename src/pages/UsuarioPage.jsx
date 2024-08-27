import { useState } from "react";
import NavBar from "../components/NavBar";
import CarritoRoutes from "../routes/CarritoRoutes";

const datosIniciales = []

const UsuarioPage = () => {

    const [carritoItems, setCarritoItems] = useState(datosIniciales);
  const handlerAgregarProducto = (producto) => {

    const existeItem = carritoItems.find(
      item => item.producto.id === producto.id
    );
    if (existeItem) {
      setCarritoItems(carritoItems.map(item => {
        if (item.producto.id === producto.id) {
          item.cantidad = item.cantidad + 1;
        }
        return item;
      }));
    } else {

      setCarritoItems([...carritoItems,
      {
        producto: producto,
        cantidad: 1,
        total: producto.precio * 1
      }
      ]);
    }
  }

  const handlerEliminarProducto = (id) => {
    setCarritoItems([...carritoItems.filter(
      item => item.producto.id !== id)]);
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Mi Tiendota</h3>
        <CarritoRoutes
          handlerAgregarProducto={handlerAgregarProducto}
          handlerEliminarProducto={handlerEliminarProducto}
          carritoItems={carritoItems} />
      </div> 
    </>
  )
}

export default UsuarioPage
