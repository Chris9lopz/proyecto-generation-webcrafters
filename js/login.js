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
});

loginBtn.addEventListener('click', () => {
  container.classList.remove("active");
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
  btnRegistro.addEventListener('click', function (event) {
    // Prevenir la acción por defecto del botón
    event.preventDefault();

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

  });
}

// Declarar función de almacenamiento inicio
function almacenarUsuarioInicio(instancia){
  // Agregar un evento de clic al botón
btnInicio.addEventListener('click', function (event) {
  // Prevenir la acción por defecto del botón
  event.preventDefault();

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

});
}

// Ejecutar la función para usuario nuevo o inicio sesión
almacenarUsuarioInicio(usuarioInicio);
almacenarUsuarioRegistro(usuarioRegistro);