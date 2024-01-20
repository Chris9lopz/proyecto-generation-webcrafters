const nombre = document.getElementById("nombre");
const correo= document.getElementById("correo");
const celular = document.getElementById("celular");
const form = document.getElementById("miFormulario");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e =>{
    e.preventDefault();

validateInputs();

});

const SetError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}

const isValidEmail = email => {
    const  regexEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return regexEmail.test(String(email).toLowerCase())
}

const isValidMovil = movil =>{
    const regexMovil =  /^\d{7,14}$/
    return regexMovil.test(movil.value);
}
const validateInputs = () => {
        const nombreValue = nombre.value.trim();
        const emailValue = correo.value.trim();
        const movilValue = celular.value.trim();
        
        if(nombreValue === '' || emailValue === '' ||  movilValue === ''){
            if(nombreValue === ''){
                SetError(nombre, "El nombre es requerido");
            }else{
                setSuccess(nombre)
            }
    
            if(emailValue === ''){
                SetError(correo, "El correo es requerido");
            }else if(!isValidEmail(emailValue)){
                SetError(correo, "incluye el @  o .com para validar el correo");
            }else{
                setSuccess(correo);
            }
    
            if(movilValue === ''){
                SetError(celular, "El numero movil es requerido");
            }else{
                setSuccess(celular);
            }

        }else{
            if(nombreValue === ''){
                SetError(nombre, "El nombre es requerido");
            }else{
                setSuccess(nombre)
            }
    
            if(emailValue === ''){
                SetError(correo, "El correo es requerido");
            }else if(!isValidEmail(emailValue)){
                SetError(correo, "incluye el @  o .com para validar el correo");
            }else{
                setSuccess(correo);
            }
    
            if(movilValue === ''){
                SetError(celular, "El numero movil es requerido");
            }else{
                setSuccess(celular);
            }
        }

       

        


}



