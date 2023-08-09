import { ProductoServices } from "../service/producto-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const urlImagen = document.querySelector("[data-urlImagen]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const producto = document.querySelector("[data-producto]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    ProductoServices
        .crearProducto(urlImagen, categoria, producto, precio, descripcion)
        .then(() => {
            window.location.href = "/screens/registro_completado.html";
        })
        .catch((err) => console.log(err));
});
