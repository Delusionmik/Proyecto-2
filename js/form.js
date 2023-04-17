/* VALIDACION FORMULARIO*/

const nombre= document.getElementById("name");
const email= document.getElementById("email");
const celular= document.getElementById("cel");
const form= document.getElementById("form");
const parrafo=  document.getElementById("advertencia");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/;
    let entrar = false;
    parrafo.innerHTML = "";
    if (nombre.Value.length <5){
        warnings += `El Nombre es invalido <br>`;
        entrar = true;
    }
    if (!regexEmail.test(email.Value)) {
        warnings += `El E-mail es invalido <br>`;
        entrar = true;
    }
    if (celular.Value.length <10){
        warnings += `El Telefono es invalido <br>`;
        entrar = true;
    }
    if (entrar){
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Formulario enviado!"
    }
})