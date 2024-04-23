const FORM = () => {

    let name = document.getElementById("nombre").value;
    let surname = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("contraseña").value;
    let confirm = document.getElementById("confirmar").value;
    let country = document.getElementById("pais").value;
    let terms = document.getElementById("check").value;

    if (name!= String) {
        alert("No es un nombre valido")
    }
}


