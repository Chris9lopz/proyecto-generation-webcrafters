class Productos {
    constructor (nombre, precio, imagenPlantilla, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.imagenPlantilla = imagenPlantilla;
        this.categoria = categoria;
    }

    comprarProducto() {
        return `{nombre: ${this.nombre} ,precio: ${this.precio}, imagenPlantilla: ${this.imagenPlantilla}, categoria: ${this.categoria}}`
    }
}

const producto1 = new Productos("Plantilla 1", 100, ".\img\foto1.jpg", "Ropa y Moda");
const producto2 = new Productos("Plantilla 2", 100, ".\img\foto1.jpg", "Ropa y Moda");
const producto3 = new Productos("Plantilla 3", 100, ".\img\foto1.jpg", "Ropa y Moda");
const producto4 = new Productos("Plantilla 4", 100, ".\img\foto1.jpg", "Belleza");
const producto5 = new Productos("Plantilla 5", 100, ".\img\foto1.jpg", "Ropa y Moda");
const producto6 = new Productos("Plantilla 6", 100, ".\img\foto1.jpg", "Ropa y Moda");
const producto7 = new Productos("Plantilla 7", 100, ".\img\foto1.jpg", "Cosmeticos");
const producto8 = new Productos("Plantilla 8", 100, ".\img\foto1.jpg", "Ropa y Moda");
const producto9 = new Productos("Plantilla 9", 100, ".\img\foto1.jpg", "Tecnología");
const producto10 = new Productos("Plantilla 10", 100, ".\img\foto1.jpg", "Ropa y Moda");
const producto11 = new Productos("Plantilla 11", 100, ".\img\foto1.jpg", "Ropa y Moda");

console.log(producto1.comprarProducto());
console.log(producto2.comprarProducto());
console.log(producto3.comprarProducto());
console.log(producto4.comprarProducto());
console.log(producto5.comprarProducto());
console.log(producto6.comprarProducto());
console.log(producto7.comprarProducto());
console.log(producto8.comprarProducto());
console.log(producto9.comprarProducto());
console.log(producto10.comprarProducto());
console.log(producto11.comprarProducto());





/*************productos************** */

const filterElements = document.querySelector(".lst-filtroProductos");
const  plantillaItems =  document.querySelectorAll(".card");
filterElements.addEventListener("click", (e)=>{
    if(e.target.classList.contains("filter-item")){
        filterElements.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");
        plantillaItems.forEach(item =>{
            if(item.classList.contains(filterValue) || filterValue == "all"){
                item.classList.remove("hide");
                item.classList.add("show");
            }else{
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

    document.getElementById("myDropdown").classList.toggle("display");


// Close the dropdown if the user clicks outside of it

if (!e.target.matches('.dropdown-toggle-menu')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('display')) {
        openDropdown.classList.remove('display');
      }
    }
}
    
    
});



