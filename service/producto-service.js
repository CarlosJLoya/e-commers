const listaProductos = () =>
    fetch("http://localhost:3000/Productos").then((respuesta) => respuesta.json())
        .catch(error => console.log(error));

const crearProducto = (urlImagen, categoria, producto, precio, descripcion) => {
    return fetch("http://localhost:3000/Productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ urlImagen, categoria, producto, precio, descripcion, id: uuid.v4() }),
    });
};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/Productos/${id}`, {
        method: "DELETE",
    });
};

const detalleProdcuto = (id) => {
    return fetch(`http://localhost:3000/Productos/${id}`).then((respuesta) =>
        respuesta.json()
    );
};

const actualizarProducto = (urlImagen, categoria, producto, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/Productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ urlImagen, categoria, producto, precio, descripcion }),
    })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
};

export const ProductoServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProdcuto,
    actualizarProducto,
};
