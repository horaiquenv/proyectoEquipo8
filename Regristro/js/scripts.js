
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var contraseña = document.getElementById("contraseña");
var confirmar = document.getElementById("confirmar");
var fecha = document.getElementById("fecha");
var pais = document.getElementById("pais");
var check = document.getElementById("check");
var error = document.getElementById("error");

function registro() {
    console.log("enviando formulario");

    

    return false;
};

function errors() {
  var errorMessage = [];

    if (nombre.value === null || nombre.value === "") {
        errorMessage.push("Ingresa tu nombre");
    };

    if(nombre.value.length < 3){
        errorMessage.push("El nombre debe tener mas de 2 caracteres");
    };

    if(nombre.value.length > 10){
        errorMessage.push("El nombre debe tener menos de 10 caracteres");
    };

    if (apellido.value === null || apellido.value === "") {
        errorMessage.push("Ingresa tu apellido");
    };

    if(apellido.value.length < 3){
        errorMessage.push("El apellido debe tener mas de 2 caracteres");
    };

    if(apellido.value.length > 10){
        errorMessage.push("El apellido debe tener menos de 10 caracteres");
    };

    if (contraseña.value.length < 8) {
        errorMessage.push("La contraseña debe tener mas de 7 caracteres");
    };

    if (confirmar.value !== contraseña.value) {
        errorMessage.push("Las contraseñas deben coincidir")
    };

    if (fecha.value === null) {
        errorMessage.push("Debes elegir tu fecha de nacimiento")
    };

    error.innerHTML = errorMessage.join(", ");
    
    return false;
};
