//expresiones regulares para validacion
const expresionNombre = /^[a-zA-ZÀ-ÿ\s]+$/;
const expNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const expresionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const expresionTelefono =/^\d{3}-\d{3}-\d{4}$/;
//const expresionMovil = /^(?:(?:\+|00)34?|0)?[6789]\d{8}$/;


//validacion de expresiones regulares

//funcion validacion nombre
  const validarNombre = (nombre) => {
    return expresionNombre.test(nombre);
  };

//funcion validacion correo
  const validarCorreo = (correo) => {
    return expresionCorreo.test(correo);
  };

  //funcion validacion telefono
  
  const validarTelefono = (telefono) => {
    return expresionTelefono.test(telefono);
  };
  
  let form = document.getElementById('miFormulario');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    
    //variables
    
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('celular').value;
    let mensaje = document.getElementById('mensaje').value;
   

    //variables de mesnajes de error
    
      const nombreError = document.getElementById('nameWarning');
      const correoError = document.getElementById('emailWarning');
      const telefonoError = document.getElementById('phoneWarning');
      const mensajeError = document.getElementById('messageWarning');

    
    //validar nombre
    let nombreValido = false;
    if(nombre == "" || nombre == 0 ){
        
        nombreError.classList.add('error');
        nombreError.innerText = 'Por favor, ingresa tu nombre.';
        document.getElementById("nombre").style.border= '1px solid red';
        
    }
    else if(!validarNombre(nombre)){
        nombreError.innerText = 'Tiene que ser solamente texto con minusculas o mayusculas';
        
    }else{
        document.getElementById("nombre").style.border= 'none';
        nombreError.innerText = '';
         nombreValido = true;
    }


    //validar correo
    correoValido = false;
    if(correo == "" || correo == 0){
         correoError.classList.add( 'error');
         correoError.innerText = 'Por favor, ingresa tu número correo.';
         document.getElementById("correo").style.border = " 1px solid red";
         
    
    }
    else if(!validarCorreo(correo)){
        
        correoError.innerText =  `incluye un signo "@" en la direccion de correo. La direcion de correo:" ${correo}" no es un correo. ` ;
        
    }else{
        document.getElementById("correo").style.border = " none";
        correoError.innerText = '';
         correoValido = true;
    }

    //validar telefono
    let telefonoValido = false;
    if(telefono == "" || telefono == 0){
        
         telefonoError.classList.add('error');
         telefonoError.innerText = 'Por favor, ingresa tu numero telefono.';
         document.getElementById("celular").style.border = " 1px solid red";
         
      
    
        
    }else if(!validarTelefono(telefono) &&  telefono <= 5){
        
        telefonoError.innerText = 'Tiene que ser solamente numeros y tiene que tener mas de 5 numeros';
        
    }else{
        document.getElementById("celular").style.border = " none";
        telefonoError.innerText = '';
         telefonoValido = true;
    }

    //validar textarea mensaje
    let mensajeValido = false;
    if(mensaje == "" || mensaje == 0 ){
        mensajeError.classList.add('error');
        mensajeError.innerText = 'Por favor, ingresa un comnetario.';
        document.getElementById("mensaje").style.border= '1px solid red';
        
    }
    else{
        document.getElementById("mensaje").style.border= 'none';
        mensajeError.innerText = '';
         mensajeValido = true;
    }

    if(mensajeValido && telefonoValido && correoValido && nombreValido){
        Swal.fire({
            icon: "success",
            title: "Mensaje enviado con exito",
            showConfirmButton: false,
            timer: 1000
      });
          form.reset();
          
    }
    


  });