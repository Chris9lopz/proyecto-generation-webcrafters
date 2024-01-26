//expresiones regulares para validacion
const expresionNombre = /^[a-zA-ZÀ-ÿ\s]+$/;
const expNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const expresionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const expresionTelefono = /^\d{10}$/;

//variables

let nombre = document.getElementById('name');
let correo = document.getElementById('email');
let telefono = document.getElementById('celular');
let mensaje = document.getElementById('mensaje');
let form = document.getElementById('miFormulario');


//variables de mesnajes de error

const nombreError = document.getElementById('nameWarning');
const correoError = document.getElementById('emailWarning');
const telefonoError = document.getElementById('phoneWarning');
const mensajeError = document.getElementById('messageWarning');


//validacion

//validacion nombre
const validarNombre = () => {
    //validar nombre  vacio
    let nombreAValidar = nombre.value;
    if (nombreAValidar == "" || nombreAValidar == 0) {
        nombreError.classList.add('error');
        nombreError.innerText = 'Por favor, ingresa tu nombre.';
        document.getElementById("name").style.border = '2px solid #951018';
        return false;
    } else if (!expresionNombre.test(nombreAValidar)) {
        nombreError.classList.add('error');
        nombreError.innerText = 'Tiene que ser solamente texto con minusculas o mayusculas';
        document.getElementById("name").style.border = '2px solid #951018';
        return false;
    } else {
        document.getElementById("name").style.border = 'none';
        nombreError.innerText = '';
        return true;
    }
};

//funcion validacion correo
const validarCorreo = () => {
    let correoAValidar = correo.value;
    //validar correo vacio
    if (correoAValidar == "" || correoAValidar == 0) {
        correoError.classList.add('error');
        correoError.innerText = 'Por favor, ingresa tu número correo.';
        document.getElementById("email").style.border = " 2px solid #951018";
        return false;
    } else if (!expresionCorreo.test(correoAValidar)) {
        correoError.classList.add('error');
        correoError.innerText = `incluye un signo "@" en la direccion de correo. La direcion de correo:" ${correo.value}" no es un correo. `;
        document.getElementById("email").style.border = " 2px solid #951018";
        return false;
    } else {
        document.getElementById("email").style.border = "none";
        correoError.innerText = '';
        return true;
    }
};

//funcion validacion telefono

const validarTelefono = () => {
    let telefonoAValidar = telefono.value;
    //validar telefono vacio
    if (telefonoAValidar == "" || telefonoAValidar == 0) {
        telefonoError.classList.add('error');
        telefonoError.innerText = 'Por favor, ingresa tu numero telefono.';
        document.getElementById("celular").style.border = " 2px solid #951018";
        return false;
    } else if (!expresionTelefono.test(telefonoAValidar)) {
        telefonoError.classList.add('error');
        telefonoError.innerText = 'Tiene que ser solamente numeros y tiene que tener mas de 10 numeros';
        document.getElementById("celular").style.border = " 2px solid #951018";
        return false;
    } else {
        document.getElementById("celular").style.border = " none";
        telefonoError.innerText = '';
        return true;
    }
};

const validarMensaje = () => {
    let textoAValidar = mensaje.value;
    //validar textarea mensaje
    if (textoAValidar == "" || textoAValidar == 0) {
        mensajeError.classList.add('error');
        mensajeError.innerText = 'Por favor, ingresa un comentario.';
        document.getElementById("mensaje").style.border = '2px solid #951018';
        return false;
    }
    else {
        document.getElementById("mensaje").style.border = 'none';
        mensajeError.innerText = '';
        return true;
    }
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let nombreValido = validarNombre();
    let correoValido = validarCorreo();
    let telefonoValido = validarTelefono();
    let mensajeValido = validarMensaje();
    if (nombreValido && correoValido && telefonoValido && mensajeValido) {
        form.submit();
        Swal.fire({
            icon: "success",
            title: "Mensaje enviado con exito",
            showConfirmButton: false,
            timer: 1000
        });
    }
});
