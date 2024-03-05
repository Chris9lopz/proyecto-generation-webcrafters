const contentContainer = document.getElementsByClassName('content-container');
for(i=0;i<contentContainer.length;i++){
    contentContainer[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}

function actualizarEstado() {
    if (localStorage.getItem('logueado') == 1){
      let iniciarS = document.querySelector('.dropdown-item');
      iniciarS.innerText = 'Cerrar Sesión';
    } else {
      console.log("No se ha recuperado el elemento");
    }
  }
  // Llamado de función
actualizarEstado();