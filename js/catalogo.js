// Variables
let id = 0;
let nombre = "";
let precio = 0;
let stock = 0;
let repetir = true;
let respuesta = 0;
let mostarProductos = "";

let arregloProductos2 = [
  {
    id: 1,
    nombre: "AMON",
    precio: 8999,
    stock: 10,
  },
  {
    id: 2,
    nombre: "BASTET",
    precio: 10000,
    stock: 10,
  },
  {
    id: 3,
    nombre: "MUT",
    precio: 9999,
    stock: 10,
  },
  {
    id: 4,
    nombre: "KHEPRI",
    precio: 8000,
    stock: 10,
  },
  {
    id: 5,
    nombre: "SETH",
    precio: 10000,
    stock: 10,
  },
  {
    id: 6,
    nombre: "THOT",
    precio: 10000,
    stock: 10,
  },
  {
    id: 7,
    nombre: "ISIS",
    precio: 10000,
    stock: 10,
  },
  {
    id: 8,
    nombre: "OSIRIS",
    precio: 9000,
    stock: 10,
  },
];

// recorremos el arregloProductos2 con el método forEach
arregloProductos2.forEach(recorrerArreglo);
alert(JSON.stringify(arregloProductos2));
// alert(arregloProductos2); // esto devuelve [object Object] porque el array es un objeto y hay que parsearlo para poder mostrarlo como string
console.log(arregloProductos2);

// mostramos en el DOM el arreglo convertido de objeto a string
document.getElementById("mostrar").innerHTML = mostarProductos;
eliminarProducto();

mostarProductos = "";
arregloProductos2.forEach(recorrerArreglo);
alert(JSON.stringify(arregloProductos2));
console.log(arregloProductos2);
document.getElementById("mostrar").innerHTML = mostarProductos;

// funciones
function recorrerArreglo(item, catalogo) {
  mostarProductos += catalogo + ": " + item + "<br>"; // object
  // mostarProductos += catalogo + ": " + JSON.stringify(item) + "<br>";
}

// filtramos arregloProductos obteniendo un nuevo array con los elementos que pasaron el test (mostramos todos menos el elemento eliminado)
function eliminarProducto() {
  let preguntar = true;
  let respuesta = "";
  let borrarProducto = "";
  let productoEncontrado = "";

  respuesta = parseInt(prompt("Desea eliminar un producto \n\n1- Sí \n2- No."));

  while (preguntar) {
    if (respuesta == 1) {
      borrarProducto = prompt(
        "Introduzca la información del producto a eliminar(nombre)"
      );
      productoEncontrado = arregloProductos2.find(
        (producto) => producto.nombre === borrarProducto
      ); // devuelve true si encuentra el producto o false en caso contrario
      if (productoEncontrado) {
        // Si se encontro el producto se elimina
        alert("Producto a eliminar encontrado.");
        arregloProductos2 = arregloProductos2.filter(
          (producto) => producto.nombre !== borrarProducto
        );
        // console.log(arregloProductos2);
        preguntar = false;
      } else {
        alert("No se encontro el producto que desea eliminar.");
        respuesta = parseInt(
          prompt("Desea eliminar un producto \n\n1- Sí \n2- No.")
        );
      }
    } else if (respuesta == 2) {
      alert("Ha seleccionado no eliminar productos.");
      preguntar = false;
    } else {
      alert(
        "Ha seleccionado una opción no válida introduzca (1) si desea eliminar un producto o (2) en caso contrario ."
      );
      respuesta = parseInt(
        prompt("Desea eliminar un producto \n\n1- Sí \n2- No.")
      );
    }
  }
}
// SEGUNDA PRE-ENTREGA DEL PROYECTO

// variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaGafas = document.querySelector("#lista-gafas");
let total = document.querySelector("#total");
let articulosCarrito = [];

class Producto {
  constructor(id, imagen, titulo, precio) {
    this.id = id;
    this.imagen = imagen;
    this.titulo = titulo;
    this.precio = precio;
    this.cantidad = 1;
    this.subtotal = 0;
  }
}

cargarEventListeners();
function cargarEventListeners() {
  // Agregamos un producto presionando "Agregar al Carrito"
  listaGafas.addEventListener("click", agregarProducto);

  // Elimina productos del carrito
  carrito.addEventListener("click", eliminarProducto);

  // Muestra los productos de Local Storage
  document.addEventListener("DOMContentLoaded", () => {
    articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carritoHTML();
  });

  // Vaciar el carrito
  vaciarCarritoBtn.addEventListener("click", () => {
    articulosCarrito = []; // reseteamos el arreglo
    localStorage.removeItem("carrito");
    limpiarHTML(); // Eliminamos todo el  HTML
    console.clear();
    console.log(articulosCarrito);
  });
}

// Funciones
function agregarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const productoSelecionado = e.target.parentElement.parentElement;
    leerDatosProducto(productoSelecionado);
  }
}

// Elimina un producto del carrito
function eliminarProducto(e) {
  // console.log(e.target.classList);
  if (e.target.classList.contains("borrar-producto")) {
    // console.log(e.target.getAttribute('data-id'));
    const productoId = e.target.getAttribute("data-id");

    // Elimina del arreglo de articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter(
      (producto) => producto.id !== productoId
    );
    console.clear();
    console.log(articulosCarrito); // Muestra el arreglo actualizado. Sin el producto que fue eliminado
    carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
  }
}

// Lee el contenido del HTML al que le dimos click y extrae la información del producto
function leerDatosProducto(producto) {
  // console.log(producto);

  const id = producto.querySelector("a").getAttribute("data-id");
  const imagen = producto.querySelector("img").src;
  const titulo = producto.querySelector("h4").textContent;
  const precio = producto.querySelector(".precio span").textContent;

  // Creo el nuevo producto
  const infoProducto = new Producto(id, imagen, titulo, precio);
  // console.log(infoProducto);

  infoProducto.subtotal =
    Number(infoProducto.precio.replace("$", "")) * infoProducto.cantidad;
  // console.log(infoProducto);

  // Revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some(
    (producto) => producto.id === infoProducto.id
  );
  if (existe) {
    // Actualizamos la cantidad
    const productos = articulosCarrito.map((producto) => {
      if (producto.id === infoProducto.id) {
        producto.cantidad++;
        producto.subtotal =
          Number(producto.precio.replace("$", "")) * producto.cantidad;
        return producto; // retorna el objeto actualizado
      } else {
        return producto; // retorna los objetos que no son los duplicados
      }
    });

    // spread operator
    articulosCarrito = [...productos];

    // // Si se usa spread operator no tenemos que vaciar el carrito.
    // articulosCarrito = [];

    // // utilizamos un for para agregar los objetos(productos) al carrito
    // for (let i = 0; i < productos.length; i++) {
    //     articulosCarrito.push(productos[i]);
    // }
  } else {
    // Agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoProducto];
    // articulosCarrito.push(infoProducto);
  }

  // console.clear();
  console.log(articulosCarrito);

  carritoHTML();
}

// Muestra el Carrito de compras en el HTML
function carritoHTML() {
  // Limpiar el HTML
  limpiarHTML();

  // Recorre el carrito y genera el HTML
  articulosCarrito.forEach((producto) => {
    const { imagen, titulo, precio, cantidad, subtotal, id } = producto;
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>$${subtotal}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${id}"> X </a>
            </td>
        `;

    // Agregamos el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });

  // Agregar el carrito de compras al storage
  sincronizarStorage();
}

function sincronizarStorage() {
  localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
}

// Elimina los productos del tbody
function limpiarHTML() {
  // forma lenta de limpiar el HTML
  // contenedorCarrito.innerHTML = '';

  // mejor performance para limpiar nuestro HTML
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }

  total.innerHTML = `Total : $${totalGeneral()}`;
}

function totalGeneral() {
  let productoTotal = articulosCarrito.reduce(
    (total, producto) => total + producto.subtotal,
    0
  );
  console.log(`Total : $${productoTotal}`);

  return productoTotal;
}
