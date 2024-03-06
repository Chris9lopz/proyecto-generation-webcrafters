
    const pintarCarrito = () => {
    modalContainer.innerHTML = " ";


      carrito.forEach((product) => {
      modalContainer.innerHtml = " ";
      let carritoContent = document.createElement('div');
      carritoContent.className = "agregarPlantilla";
      carritoContent.innerHTML =  `
      <div class="agregarPlantillaImg" >
        <img src="${product.img}" class="card-img-top  carrito-img-top" alt="...">
      </div>
      <div class="agregarPlantillaTxt" >
       <p  class="plantillaTxt1" >${product.nombre}</p>
       <p class="plantillaTxt2" > $${product.precio}</p>
       
      <select class="opciones" >
        <option>basico</option>
        <option>Intermedio</option>
        <option>Avanzado</option>    
      </select>
    </div>
    
      `;
        modalContainer.append(carritoContent);
        console.log(carrito.length)


        let eliminar = document.createElement('div');
        eliminar.innerHTML = ` 
        <img src="img/productos/eliminar.png" class="card-img-top  carrito-img-top" alt="...">
        `
        eliminar.className = "btn-Eliminar";
        carritoContent.append(eliminar);
        eliminar.addEventListener("click", () => eliminarProducto(product));
      })
      
      const total = carrito.reduce((acc,el) => acc + el.precio, 0)
      modalContainer.innerHtml = " ";
      const totalBuying = document.createElement('div')
      totalBuying.className = 'total'
      totalBuying.innerHTML = `
      <p class="totalTxt">Total:</p>
      <p class="numTxt">$ ${total} </p>
      `
      modalContainer.append(totalBuying);
     
    }

    verCarrito.addEventListener("click", pintarCarrito)

    const eliminarProducto = () =>{
        const foundId = carrito.find((element) => element.id);
        console.log(foundId);
        carrito = carrito.filter((carritoId) =>{
            return carritoId !== foundId;
        });
        carritoCounter();
        pintarCarrito();
        saveLocal();
    }

    const carritoCounter = () => {
        cantidadCarrito.style.display="block";
        cantidadCarrito.innerText = carrito.length
    }