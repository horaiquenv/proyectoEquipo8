document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    if(registro(this)){
       this.submit();
    }
});

var clear = () => {
    var clearError = document.getElementsByClassName("error");
    for (let i = 0; i < clearError.length; i++) {
        clearError[i].innerHTML = "";   
    };   
};

var registro = (form) => {
    
    clear();

    if (form.nombre.value === null || form.nombre.value === "") {
        document.getElementById("errorNombre").innerText = "Ingresa tu nombre";
        form.nombre.focus();    
    };
    if(form.nombre.value.length < 3){
        document.getElementById("errorNombre").innerText = "El nombre debe tener mas de 2 caracteres";
        form.nombre.focus();    
    };
    if(form.nombre.value.length > 10){
        document.getElementById("errorNombre").innerText = "El nombre debe tener menos de 10 caracteres";
        form.nombre.focus();    
    };


    if (form.apellido.value === null || form.apellido.value === "") {
        document.getElementById("errorApellido").innerText = "Ingresa tu apellido";
        form.apellido.focus();    
    };
    if(form.apellido.value.length < 3){
        document.getElementById("errorApellido").innerText = "El apellido debe tener mas de 2 caracteres";
        form.apellido.focus();        
    };
    if(form.apellido.value.length > 10){
        document.getElementById("errorApellido").innerText = "El apellido debe tener menos de 10 caracteres";
        form.apellido.focus();   
    };


    var expReg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!expReg.test(form.email.value)) {
        document.getElementById("errorEmail").innerText = "Ingresa una direccion de Email válida";
        form.email.focus();    
    };


    if(form.contraseña.value.length < 8){
        document.getElementById("errorContraseña").innerText = "La contraseña debe tener al menos 8 caracteres";
        form.contraseña.focus();
    }
    if(!form.contraseña.value.match(/[a-z]/)&& !form.contraseña.value.match(/[A-Z]/)){
        document.getElementById("errorContraseña").innerText = "La contraseña debe tener mayusculas y minusculas";
        form.contraseña.focus();
    };
    if(!form.contraseña.value.match(/\d/)){
        document.getElementById("errorContraseña").innerText = "La contraseña debe tener al menos un caracter numerico";
        form.contraseña.focus();
    };


    if(form.confirmar.value !== form.contraseña.value){
        document.getElementById("errorConfirmar").innerText = "Las contraseñas deben coincidir";
        form.confirmar.focus();
    };


    if(form.fecha.value === ""){
        document.getElementById("errorFecha").innerText = "Elija su fecha de nacimiento";
        form.fecha.focus();
    }


    if(form.pais.value === ""){
        document.getElementById("errorPais").innerText = "Elija un pais de la lista";
        form.pais.focus();
    };


    if(!form.check.checked){
        document.getElementById("errorCheck").innerText = "Acepte los terminos y condiciones";
        form.check.focus();
    };

    console.log("enviando formulario",[
        nombre.value, 
        apellido.value, 
        email.value, 
        contraseña.value, 
        confirmar.value,
        fecha.value,
        pais.value,
        check.value]);
    return false;
    
};