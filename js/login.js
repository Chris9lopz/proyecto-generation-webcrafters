// Crear clase persona
class Usuario {
  constructor(nombre, email, password) {
    this._nombre = '';
    this._email = '';
    this._password = '';
  }

  getNombre() {
    return this._nombre;
  }

  setNombre(newNombre) {
    return this._nombre = newNombre;
  }

  getEmail() {
    return this._email;
  }

  setEmail(newEmail) {
    return this._email = newEmail;
  }

  getPassword() {
    return this._password;
  }

  setPassword(newPassword) {
    return this._password = newPassword;
  }

}

// Declarar los elementos 
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Agregar evento de toggle clase
registerBtn.addEventListener('click', () => {
  container.classList.add("active");
  document.getElementById('iniEmail').value = '';
  document.getElementById('iniPass').value = '';
  let alertas = document.querySelectorAll('.alerta');
  for (alerta of alertas){
    alerta.classList.add('d-none')   
  }
  let inputs = document.querySelectorAll('.input');
  for (input of inputs){
    input.style.border = 'none';
  }
});

loginBtn.addEventListener('click', () => {
  container.classList.remove("active");
  document.getElementById('regNombre').value = '';
  document.getElementById('regEmail').value = '';
  document.getElementById('regPass').value = '';
  let alertas = document.querySelectorAll('.alerta');
  for (alerta of alertas){
    alerta.classList.add('d-none')   
  }
  let inputs = document.querySelectorAll('.input');
  for (input of inputs){
    input.style.border = 'none';
  }
});


// Declaración de instancias clase Usuario
const usuarioInicio = new Usuario();
const usuarioRegistro = new Usuario();

// Declarar querySelector de botones
const btnInicio = document.querySelector('.btn-inicio');
const btnRegistro = document.querySelector('.btn-registro');

// Declarar funcion almacenamiento registro
function almacenarUsuarioRegistro(instancia) {
  // Agregar un evento de clic al botón
  //btnRegistro.addEventListener('click', function (event) {
    // Prevenir la acción por defecto del botón
    //event.preventDefault();

    // Recuperar los valores de los campos de entrada
    let nombre = document.getElementById('regNombre').value;
    let email = document.getElementById('regEmail').value;
    let password = document.getElementById('regPass').value;

    // Almacenar instancia
    instancia.setNombre(nombre);
    instancia.setEmail(email);
    instancia.setPassword(password);

    // Eliminar contenido actual local storage
    localStorage.clear();

    // Almacenamiento local storage
    localStorage.setItem('nombre', instancia.getNombre());
    localStorage.setItem('email', instancia.getEmail());
    localStorage.setItem('password', instancia.getPassword());

  }
 // );}

// Declarar función de almacenamiento inicio
function almacenarUsuarioInicio(instancia){
  // Agregar un evento de clic al botón
  //btnInicio.addEventListener('click', function (event) {
  // Prevenir la acción por defecto del botón
  //event.preventDefault();

  // Recuperar los valores de los campos de entrada
  let email = document.getElementById('iniEmail').value;
  let password = document.getElementById('iniPass').value;

  // Almacenar instancia inicio sesion
  instancia.setEmail(email);
  instancia.setPassword(password);

  // Eliminar contenido localStorage
  localStorage.clear();

  // Almacenar contenido usuario en local storage
  localStorage.setItem('email', instancia.getEmail());
  localStorage.setItem('password', instancia.getPassword());
}
//);
//}

// Ejecutar la función para usuario nuevo o inicio sesión
almacenarUsuarioRegistro(usuarioRegistro);

//Expresiones para validar campos

const expresionNombre = /^[a-zA-ZÀ-ÿ\s]+$/;
const expresionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const expresionPassword = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

//variables mensajes de error

const correoAlertaIniciarSesion = document.querySelector('#alerta-correo');
const passwordAlertaIniciarSesion = document.querySelector('#alerta-password');
const nombreAlerta = document.querySelector('#alerta-nombre-registro');
const correoAlertaRegistro = document.querySelector('#alerta-correo-registro');
const passwordAlertaRegistro = document.querySelector('#alerta-password-registro');

//validar iniciar sesion

const validarEmailIniciarSesion = () =>{
  let emailAValidar = document.getElementById('iniEmail').value;
  if(emailAValidar==0||emailAValidar==''){
    correoAlertaIniciarSesion.classList.remove('d-none');
    correoAlertaIniciarSesion.innerText = 'Por favor ingresa un email';
    document.getElementById("iniEmail").style.border = '2px solid #951018';
    return false;
  }else if(!expresionCorreo.test(emailAValidar)){
    correoAlertaIniciarSesion.classList.remove('d-none');
    correoAlertaIniciarSesion.innerText = `La direccion de correo: "${emailAValidar}" no es un correo.`;
    document.getElementById("iniEmail").style.border = '2px solid #951018';
    return false;
  }else{
    correoAlertaIniciarSesion.classList.add('d-none');
    document.getElementById("iniEmail").style.border = 'none';
    return true;
  }
}

const validarPasswordIniciarSesion = () =>{
  let passwordAValidar = document.getElementById('iniPass').value;
  if(passwordAValidar==0 || passwordAValidar==''){
    passwordAlertaIniciarSesion.classList.remove('d-none');
    passwordAlertaIniciarSesion.innerText = 'Por favor ingrese una contraseña';
    document.getElementById('iniPass').style.border = '2px solid #951018';
    return false;
  }else if(!expresionPassword.test(passwordAValidar)){
    passwordAlertaIniciarSesion.classList.remove('d-none');
    passwordAlertaIniciarSesion.innerText = 'La contraseña debe tener 8 carácteres mínimo entre numeros y letras';
    document.getElementById('iniPass').style.border = '2px solid #951018';
    return false;
  }else{
    passwordAlertaIniciarSesion.classList.add('d-none');
    document.getElementById('iniPass').style.border = 'none';
    return true;
  }
}

//validar registrarse

const validarNombre = () => {
  let nombreAValidar = document.getElementById('regNombre').value;
  if(nombreAValidar == 0 || nombreAValidar == ''){
    nombreAlerta.classList.remove('d-none');
    nombreAlerta.innerText = 'Por favor ingrese un nombre';
    document.getElementById('regNombre').style.border = '2px solid #951018';
    return false;
  }else if(!expresionNombre.test(nombreAValidar)){
    nombreAlerta.classList.remove('d-none');
    nombreAlerta.innerText = 'Tiene que ser solamente texto con minusculas o mayusculas';
    document.getElementById('regNombre').style.border = '2px solid #951018';
  }else{
    nombreAlerta.classList.add('d-none');
    document.getElementById('regNombre').style.border = 'none';
    return true;
  }
}

const validarEmailRegistrar = () =>{
  let emailAValidar = document.getElementById('regEmail').value;
  if(emailAValidar==0||emailAValidar==''){
    correoAlertaRegistro.classList.remove('d-none');
    correoAlertaRegistro.innerText = 'Por favor ingresa un email';
    document.getElementById("regEmail").style.border = '2px solid #951018';
    return false;
  }else if(!expresionCorreo.test(emailAValidar)){
    correoAlertaRegistro.classList.remove('d-none');
    correoAlertaRegistro.innerText = `La direccion de correo: "${emailAValidar}" no es un correo.`;
    document.getElementById("regEmail").style.border = '2px solid #951018';
    return false;
  }else{
    correoAlertaRegistro.classList.add('d-none');
    document.getElementById("regEmail").style.border = 'none';
    return true;
  }
}

const validarPasswordRegistrar = () =>{
  let passwordAValidar = document.getElementById('regPass').value;
  if(passwordAValidar==0 || passwordAValidar==''){
    passwordAlertaRegistro.classList.remove('d-none');
    passwordAlertaRegistro.innerText = 'Por favor ingrese una contraseña';
    document.getElementById('regPass').style.border = '2px solid #951018';
    return false;
  }else if(!expresionPassword.test(passwordAValidar)){
    passwordAlertaRegistro.classList.remove('d-none');
    passwordAlertaRegistro.innerText = 'La contraseña debe tener 8 carácteres mínimo entre numeros y letras';
    document.getElementById('regPass').style.border = '2px solid #951018';
    return false;
  }else{
    passwordAlertaRegistro.classList.add('d-none');
    document.getElementById('regPass').style.border = 'none';
    return true;
  }
}

 
const toast = document.querySelector(".toastXT"),
     closeIcon = document.querySelector(".close"),
     progress = document.querySelector(".progressTX");
     mostrar = document.querySelector(".container-alerts");
     formulario =document.getElementById("form")
     volver = document.querySelector('.volver');
     textAlert= document.querySelector('.text-2');

     volver.addEventListener('click', (e)=>{
      e.preventDefault();
      window.location.href = "nosotros.html"
     })
btnInicio.addEventListener('click', function(e){
  e.preventDefault();
  let emailValido = validarEmailIniciarSesion();
  let passwordValido = validarPasswordIniciarSesion();
  if(emailValido && passwordValido){
    
    

    toast.classList.add("active");
                progress.classList.add("active");
                mostrar.classList.add("mostrar");
                textAlert.innerText = 'Has ingresado con exito'
                


            setTimeout(() => {
                toast.classList.remove("active");
                mostrar.classList.remove("mostrar");
                almacenarUsuarioInicio(usuarioInicio);
                
            window.location.href = "productos.html"
            }, 2500);// 1s= 1000 milisegundos

            setTimeout(() => {
                progress.classList.remove("active");
                mostrar.classList.remove("mostrar");
            },2500);

  }

  /*alerts*/

  
  
})

btnRegistro.addEventListener('click', function(e){
  e.preventDefault();
  let nombreValido = validarNombre();
  let emailValido = validarEmailRegistrar();
  let passwordValido = validarPasswordRegistrar();
  if(nombreValido && emailValido && passwordValido){
    almacenarUsuarioRegistro(usuarioRegistro);
/*alerts* */

    toast.classList.add("active");
    progress.classList.add("active");
    mostrar.classList.add("mostrar");

    setTimeout(() => {
       toast.classList.remove("active");
        mostrar.classList.remove("mostrar");
    }, 2500);

     setTimeout(() => {
        progress.classList.remove("active");
        mostrar.classList.remove("mostrar");
     },2500);
  }
  formulario.reset();

  
  
});


