

export const getProductos = async() => {
    const respuesta = await fetch("http://localhost:9292/api/productos");
    const productos = await respuesta.json();
    return productos;
}

export const calcularTotal = (items) => {
    return items.reduce( (accumulador, item) =>
        accumulador + item.cantidad * item.producto.precio,0 );
}