const documento = document.getElementById("documento");
const boton = document.getElementById("boton");

const nombre = document.getElementById("nombre");
const tel = document.getElementById("telefono");
const mail = document.getElementById("mail");

const nombreValue = nombre.value;
const docuValue = documento.value;
const telValue = telefono.value;
const mailValue = mail.value;


const solicitante = {
    nombre: nombreValue, 
    documento: docuValue, 
    telefono: telValue, 
    mail: mailValue
}

const solicitanteEnJSON = JSON.stringify(solicitante);


localStorage.setItem('solicitante', solicitanteEnJSON);


documentosDeudores = [1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999];

const validarDoc = (valor) => {
    
    let i = 0;

    while ((i < 9) && (valor !== documentosDeudores[i])) {

        i++;

    }

    if (i == 9) {
        let montoUnoContenedor = document.createElement("div"); 
        montoUnoContenedor.innerHTML = "<p>$10.000</p><button>seleccionar</button><p>$20.000</p><button>seleccionar</button><p>$30.000</p><button>seleccionar</button><p>$40.000</p><button>seleccionar</button><p>$50.000</p><button>seleccionar</button><p>$60.000</p><button>seleccionar</button>"
     
        document.body.append(montoUnoContenedor);

    } else {
        let mensajeDeudor = document.createElement("p");  
        mensajeDeudor.innerText = "Usted no esta habilitado para acceder a nuestros prestamos"
        document.body.append(mensajeDeudor);

        localStorage.clear();
    }
}


boton.onclick = () => {
    
    const documentoValue = parseInt(documento.value);
    validarDoc(documentoValue);
}

