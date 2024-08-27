import { useEffect, useState } from "react"
import ProdcutoView from "./ProdcutoView"
import { getProductos } from "../services/productoService";


const CatalogoView = ({ handler }) => {
  const [productos, setProductos] = useState([]);
  const listarProductos = async () => {
    const prods = await getProductos();
    setProductos(prods);
  }
  useEffect(() => {
    listarProductos();
  }, []);
  return (
    <>
      <div className="row">
        {productos.map((producto, i) => (
          <div className="col-4 my-2" key={producto.id}>
            <ProdcutoView
              handler={handler}
              id={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio} />
          </div>
        ))}
      </div>
    </>
  )
}

export default CatalogoView
