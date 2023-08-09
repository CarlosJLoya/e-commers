import { ProductoServices } from "../service/producto-service.js";

//backticks
const crearNuevaLinea = (urlImagen, categoria, producto, precio, descripcion, id) => {
  const linea = document.createElement("tr");
  const contenido = `
    <td class="td" data-td>
      ${urlImagen}
    </td>
    <td>${categoria}</td>
    <td>${producto}</td>
    <td>${precio}</td>

    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_producto.html?id=${id}"
            class="simple-button simple-button--edit"
          >
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;
  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    clientServices
      .eliminarCliente(id)
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((err) => alert("Ocurrió un error"));
  });

  return linea;
};

const table = document.querySelector("[data-table]");

ProductoServices
  .listaProductos()
  .then((data) => {
    data.forEach(({ urlImagen, categoria, producto, precio, descripcion, id }) => {
      const nuevaLinea = crearNuevaLinea(urlImagen, categoria, producto, precio, descripcion, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));
