import { ProductoServices } from "../service/producto-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        window.location.href = "screens/error.html";
    }

    const urlImagen = document.querySelector("[data-urlImagen]");
    const categoria = document.querySelector("[data-categoria]");
    const producto = document.querySelector("[data-producto]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    try {
        const productos = await clientServices.detalleProducto(id);
        if (productos.producto && productos.producto) {
            productos.value = productos.urlImagen;
            productos.value = productos.categoria;
            productos.value = productos.producto;
            productos.value = productos.precio;
            productos.value = productos.descripcion;
        } else {
            throw new Error();
        }
    } catch (error) {
        window.location.href = "/screens/error.html";
    }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const urlImagen = document.querySelector("[data-urlImagen]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const producto = document.querySelector("[data-producto]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    ProductoServices.actualizarProducto(urlImagen, categoria, producto, precio, descripcion, id).then(() => {
        window.location.href = "/screens/edicion_concluida.html";
    });
});