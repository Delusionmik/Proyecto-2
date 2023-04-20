/* VALIDACION FORMULARIO*/

/* VALIDACION FORMULARIO*/

var nombre = document.getElementById("name");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var textArea = document.getElementById("contacttextarea");
var form = document.getElementById("form");
var parrafo = document.getElementById("warnings");

form.addEventListener("submit", e => {
	e.preventDefault()
	let warnings = "";
	let entrar = false;
	let regexName = /^[a-zA-ZÀ-ÿ\s]{1,20}$/;
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	let regexTel = /^[0-9]{7,14}$/;
	let regexParra = /^[a-zA-Z0-9\s]{1,40}$/;
	parrafo.innerHTML = "";
	if (!regexName.test(nombre.value)) {
		warnings += `El nombre no es valido <br>`;
		entrar = true;
	}
	if (!regexEmail.test(email.value)) {
		warnings += `El email no es valido <br>`;
		entrar = true;
	}
	if (!regexTel.test(telefono.value)) {
		warnings += `El telefono no es valido <br>`;
		entrar = true;
	}
	if (!regexParra.test(textArea.value)) {
		warnings += `El texto es muy corto <br>`;
		entrar = true;
	}
	if (entrar) {
		parrafo.innerHTML = warnings;
	} else {
		var $form = document.querySelector("#form");
		$form.addEventListener("submit", handleSubmit)
		async function handleSubmit(event) {
			event.preventDefault()
			const form = new FormData(this)
			const response = await fetch (this.action, {
				method: this.method,
				body: form,
				headers: {
					"Accept": "application/json"
				}
			})
			if (response.ok) {
				document.getElementById("form").reset()
				swal("Formulario enviado", "Muchas gracias por suscribirte!");
			}
		}
	}
})
