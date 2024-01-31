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

// Declaración de llaves de producto para localstorage
const keys = ["img", "categoria", "nombre", "precio"];

// Declaración de objeto shop cart
let productos = [
  document.getElementById('prod-1'),
  document.getElementById('prod-2'),
  document.getElementById('prod-3'),
  document.getElementById('prod-4'),
  document.getElementById('prod-5'),
  document.getElementById('prod-6'),
  document.getElementById('prod-7'),
  document.getElementById('prod-8'),
  document.getElementById('prod-9')
];

// Almacenar instancias de producto para asignación posterior
let instanciaProducto = [
  producto1, 
  producto2, 
  producto3, 
  producto4, 
  producto5, 
  producto6, 
  producto7, 
  producto8, 
  producto9
];

/// Declaración de función para almacenar en localstorage
function almacenarProducto(producto, instanciaProducto) {
  
  // Crear evento de elemento asignado por id
  producto.addEventListener("click", () => {
    
    let aElement = producto;

    // Identificar elemento contenedor card
    let cardElement = aElement.closest(".card");

    // Recuperar el src de la imagen
    let imgSrc = cardElement.querySelector("img").src;

    // Recuperar el contenido del título
    let titleContent = cardElement.querySelector("h5").textContent;

    // Recuperar el contenido del párrafo
    let paragraphContent = cardElement.querySelector("p").textContent;

    // Recuperar el contenido de un párrafo con identificador
    let specificParagraphContent = cardElement.querySelector(".precio").textContent;

    // Set cada valor de card a respectiva instancia de clase producto
    instanciaProducto.setImg(imgSrc);
    instanciaProducto.setNombre(titleContent);
    instanciaProducto.setCategoria(paragraphContent);
    instanciaProducto.setPrecio(specificParagraphContent);

    // Recorrer keys para almacenamiento en localstorage
    for (let key of keys) {

      // Almacenar local storage en base a key
      switch (key) {
        case 'img':
          localStorage.setItem(key, JSON.stringify(instanciaProducto.getImg()));
          break;
        case 'categoria':
          localStorage.setItem(key, JSON.stringify(instanciaProducto.getCategoria()));
          break;
        case 'nombre':
          localStorage.setItem(key, JSON.stringify(instanciaProducto.getNombre()));
          break;
        case 'precio':
          localStorage.setItem(key, JSON.stringify(instanciaProducto.getPrecio()));
          break;
      }
  
    }
  });
}

// Aplicar la función a cada producto e instancia de producto
for (let i = 0; i < productos.length; i++) {
  almacenarProducto(productos[i], instanciaProducto[i]);
}