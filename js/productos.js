// Crear una clase con objetos
class Productos {

  constructor(img, categoria, nombre, precio) {
    this._img = '';
    this._categoria = '';
    this._nombre = '';
    this._precio = '';
  }

  getImg() {
    return this._img;
  }

  setImg(newImg) {
    return (this._img = newImg);
  }

  getCategoria() {
    return this._categoria;
  }

  setCategoria(newCategoria) {
    return (this._categoria = newCategoria);
  }

  getNombre() {
    return this._nombre;
  }

  setNombre(newNombre) {
    return (this._nombre = newNombre.replace(/\s+/g, ' ').trim());
  }

  getPrecio() {
    return this._precio;
  }

  setPrecio(newPrecio) {
    return (this._precio = newPrecio.replace('$', ''));
  }

  establecerObjeto() {
    return `{img: ${this._img}, categoria: ${this._categoria}, nombre: ${this._nombre}, precio: ${this._precio} }`;
  }
}


/*************Productos************** */

const filterElements = document.querySelector(".lst-filtroProductos");
const plantillaItems = document.querySelectorAll(".card");
filterElements.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-item")) {
    filterElements.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const filterValue = e.target.getAttribute("data-filter");
    plantillaItems.forEach(item => {
      if (item.classList.contains(filterValue) || filterValue == "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    })
  }


  // Obtener elementos necesarios
  const dropdownButton = document.getElementById('dropdownMenuButton1');
  const dropdownItems = document.querySelectorAll('.filter-item');

  // Agregar evento de clic a cada elemento de la lista
  dropdownItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Obtener el texto del elemento clicado
      let selectedText = item.innerText;

      // Actualizar el texto del botón con el texto seleccionado
      dropdownButton.innerText = selectedText;



    });
  });

  /************************************ */

  if (!e.target.matches('.lst-filtro')) {
    let dropdowns = document.getElementsByClassName("dropdown-menu");

    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('menus')) {
        openDropdown.classList.add('menus')
        openDropdown.classList.remove('menus');
      } else {
        openDropdown.classList.remove('menus');
        openDropdown.classList.add('menus')

      }
    }
  }
});


// Crear una instancias de la clase Productos
let producto1 = new Productos();
let producto2 = new Productos();
let producto3 = new Productos();
let producto4 = new Productos();
let producto5 = new Productos();
let producto6 = new Productos();
let producto7 = new Productos();
let producto8 = new Productos();
let producto9 = new Productos();

// Declaración de llaves de producto
const keys = ["img", "categoria", "nombre", "precio"];

// Declaración de objeto shop cart
let prod1 = document.getElementById('prod-1');
let prod2 = document.getElementById('prod-2');
let prod3 = document.getElementById('prod-3');
let prod4 = document.getElementById('prod-4');
let prod5 = document.getElementById('prod-5');
let prod6 = document.getElementById('prod-6');
let prod7 = document.getElementById('prod-7');
let prod8 = document.getElementById('prod-8');
let prod9 = document.getElementById('prod-9');

// Declaración de función para almacenar en localstorage
function procesarElemento(elementoGetID){
  elementoGetID.addEventListener("click", () =>{
  let cardElement = aElement.closest(".card");

  // Recuperar el src de la imagen
  let imgSrc = cardElement.querySelector("img").src;

  // Recuperar el contenido del título
  let titleContent = cardElement.querySelector("h5").textContent;

  // Recuperar el contenido del párrafo
  let paragraphContent = cardElement.querySelector("p").textContent;

  // Recuperar el contenido de un párrafo con identificador
  let specificParagraphContent = cardElement.querySelector("#price").textContent;
  });
}