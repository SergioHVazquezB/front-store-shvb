import { useEffect, useState } from "react"
import { calcularTotal } from "../services/productoService";
import { useNavigate } from "react-router-dom";


const CarritoView = ({items, handlerEliminar}) => {
    const[total, setTotal] = useState(0);
    useEffect(()=>{
        setTotal(calcularTotal(items));
    }, [items]);

    const eliminarProducto = (id) => {
        handlerEliminar(id)
    }

    const navigate = useNavigate();

    const alCatalogo = () => {
        navigate("/catalogo");
    }
  return (
    <>
      <table className="table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map((item, i)=>(
                    <tr key={i}>
                        <td>{item.producto.nombre}</td>
                        <td>{item.producto.descripcion}</td>
                        <td>${item.producto.precio}</td>
                        <td>{item.cantidad}</td>
                        <td>$ { item.producto.precio * item.cantidad}</td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>eliminarProducto(item.producto.id)}>Eliminar</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className="fw-bold">Total</td>
                        <td colSpan="2" className="fw-bold">${total}</td>
                    </tr>
                </tfoot>
            </table>
            <button className="btn btn-success" onClick={()=> alCatalogo()} >Seguir comprando</button>
    </>
  )
}

export default CarritoView
