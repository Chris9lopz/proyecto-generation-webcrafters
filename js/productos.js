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
