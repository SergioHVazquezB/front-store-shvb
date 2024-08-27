import { Navigate, Route, Routes } from "react-router-dom"
import CatalogoView from "../components/CatalogoView"
import CarritoView from "../components/CarritoView"
import UsuarioMain from "../components/usuarios/UsuarioMain"


const CarritoRoutes = ({handlerAgregarProducto, handlerEliminarProducto, carritoItems }) => {
  return (
    <>
      <Routes>
          <Route path="catalogo" element={
            <CatalogoView handler={producto => handlerAgregarProducto(producto)} />
          } />
          <Route path="carrito" element={
            carritoItems.length <= 0 ?
            <div className="alert alert-warning">No tenemos productos</div>
            :
            <div className="my-4">
              <h3>Mi carrito</h3>
              <CarritoView
                items={carritoItems}
                handlerEliminar={handlerEliminarProducto} />
            </div>
          } />
          <Route path="/" element={ <Navigate to={'/catalogo'} /> }/>
          <Route path="usuario" element={ <UsuarioMain />  } />
        </Routes>
    </>
  )
}

export default CarritoRoutes
