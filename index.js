//funcion que despliega los montos a elegir y sus respectivos botones
const mostrarMontos = () => {

    const subtituloMonto = document.createElement("h2");
    subtituloMonto.setAttribute("class", "subtitulo");    
    subtituloMonto.innerText ="Monto solicitado";

    
    setTimeout(eliminarColor=()=>{
        subtituloMonto.classList.remove("subtitulo");
    } , 2000);

    const montoUnoContenedor = document.createElement("div"); 
    montoUnoContenedor.innerHTML = '<p id="pUno">$10.000</p><button id="botonUno">seleccionar</button>'
    montoUnoContenedor.className = "montoUnoCont";

    const montoDosContenedor = document.createElement("div"); 
    montoDosContenedor.innerHTML = '<p id="pDos">$20.000</p><button id="botonDos">seleccionar</button>'
    montoDosContenedor.className = "montoDosCont";

    const montoTresContenedor = document.createElement("div"); 
    montoTresContenedor.innerHTML = '<p id="pTres">$30.000</p><button id="botonTres">seleccionar</button>'
    montoTresContenedor.className = "montoTresCont";

    const montoCuatroContenedor = document.createElement("div"); 
    montoCuatroContenedor.innerHTML = '<p id="pCuatro">$40.000</p><button id="botonCuatro">seleccionar</button>'
    montoCuatroContenedor.className = "montoCuatroCont";

    const montoCincoContenedor = document.createElement("div"); 
    montoCincoContenedor.innerHTML = '<p id="pCinco">$50.000</p><button id="botonCinco">seleccionar</button>'
    montoCincoContenedor.className = "montoCincoCont"        
     
    document.body.append(subtituloMonto);
    document.body.append(montoUnoContenedor);
    document.body.append(montoDosContenedor);
    document.body.append(montoTresContenedor);
    document.body.append(montoCuatroContenedor);
    document.body.append(montoCincoContenedor);
    
}

//funcion que despliega las cuotas a elegir y sus respectivos botones
const mostrarCuotas= () => {

    const subtituloCuotas = document.createElement("h2");    
    
    subtituloCuotas.innerText = "Cantidad de cuotas";
    subtituloCuotas.setAttribute("class", "subtitulo");
    
    setTimeout(eliminarColor=()=>{
        subtituloCuotas.classList.remove("subtitulo");
    } , 2000);

    const unaCuotaContenedor = document.createElement("div"); 
    unaCuotaContenedor.innerHTML = '<p id="pUnaCuota">Una cuota</p><button id="unaCuota">Seleccionar</button>'

    const dosCuotasContenedor = document.createElement("div"); 
    dosCuotasContenedor.innerHTML = '<p id="pDosCuotas">Dos cuotas</p><button id="dosCuotas">Seleccionar</button>'

    const tresCuotasContenedor = document.createElement("div"); 
    tresCuotasContenedor.innerHTML = '<p id="pTresCuotas">Tres cuotas</p><button id="tresCuotas">Seleccionar</button>'

    const seisCuotasContenedor = document.createElement("div"); 
    seisCuotasContenedor.innerHTML = '<p id="pSeisCuotas">Seis cuotas</p><button id="seisCuotas">Seleccionar</button>'

    const nueveCuotasContenedor = document.createElement("div"); 
    nueveCuotasContenedor.innerHTML = '<p id="pNueveCuotas">Nueve cuotas</p><button id="nueveCuotas">Seleccionar</button>'

    const doceCuotasContenedor = document.createElement("div"); 
    doceCuotasContenedor.innerHTML = '<p id="pDoceCuotas">Doce cuotas</p><button id="doceCuotas">Seleccionar</button>'


    document.body.append(subtituloCuotas);
    document.body.append(unaCuotaContenedor);
    document.body.append(dosCuotasContenedor);
    document.body.append(tresCuotasContenedor);
    document.body.append(seisCuotasContenedor);
    document.body.append(nueveCuotasContenedor);
    document.body.append(doceCuotasContenedor);



}

//funcion que calcula y despliega la cuota mensual

const mostrarCuotaMensual = (monto) => {

    const botonUnaCuota = document.getElementById("unaCuota");
    const botonDosCuotas = document.getElementById("dosCuotas");
    const botonTresCuotas = document.getElementById("tresCuotas");
    const botonSeisCuotas = document.getElementById("seisCuotas");
    const botonNueveCuotas = document.getElementById("nueveCuotas");
    const botonDoceCuotas = document.getElementById("doceCuotas");

    botonUnaCuota.onclick = () => {
        let montoPagar = (monto * 1.02);
        Swal.fire({
            title: `Deberá abonar: $ ${montoPagar.toFixed()}`,
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })


}

    botonDosCuotas.onclick = () => {
        let montoPagar = (monto * 1.03)/2;
        Swal.fire({
            title: `Su cuota mensual sera de: $ ${montoPagar.toFixed()}`,
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })


}

    botonTresCuotas.onclick = () => {
        let montoPagar = (monto * 1.04)/3;
        Swal.fire({
            title: `Su cuota mensual sera de: $ ${montoPagar.toFixed()}`,
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })


    }

    botonSeisCuotas.onclick = () => {
        let montoPagar = (monto * 1.05)/6;
        Swal.fire({
            title: `Su cuota mensual sera de: $ ${montoPagar.toFixed()}`,
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })


    }

    botonNueveCuotas.onclick = () => {
        let montoPagar = (monto * 1.06)/9;
        Swal.fire({
            title: `Su cuota mensual sera de: $ ${montoPagar.toFixed()}`,
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })


    }

    botonDoceCuotas.onclick = () => {
        let montoPagar = (monto * 1.07)/12;
        Swal.fire({
            title: `Su cuota mensual sera de: $ ${montoPagar.toFixed()}`,
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })


    }

}





//funcion que valida si la persona puede acceder a los prestamos o es deudora
 
const validarDoc = (valor) => {

    const getData = () => {
        return new Promise((resolve, reject) => {
            fetch("./deudores.json")
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                if (data.length === 0) {
                    reject(new Error('Data is empty'));
                } else {
                    const documentosDeudores = data.map(item => parseInt(item.documento));
                    resolve(documentosDeudores);
                }
            })
            .catch(function(error) {
                reject(error);
            });
        });
    }

    getData()
    .then((documentosDeudores) => {
        console.log("Documentos deudores:", documentosDeudores);
        
        let i = 0;
        while ((i < documentosDeudores.length) && (valor !== documentosDeudores[i])) {
            i++;
        }

        if (i === documentosDeudores.length) {
            mostrarMontos();

            const botonUno = document.getElementById("botonUno");
        const botonDos = document.getElementById("botonDos");
        const botonTres = document.getElementById("botonTres");
        const botonCuatro = document.getElementById("botonCuatro");
        const botonCinco = document.getElementById("botonCinco");

        let monto;
        

        botonUno.onclick = () => {
            
            monto = 10000;


            const pDos = document.getElementById("pDos");
            pDos.remove();
            botonDos.remove();

            const pTres = document.getElementById("pTres");
            pTres.remove();
            botonTres.remove();

            const pCuatro = document.getElementById("pCuatro");
            pCuatro.remove();
            botonCuatro.remove();

            const pCinco = document.getElementById("pCinco");
            pCinco.remove();
            botonCinco.remove();


            mostrarCuotas();

            

        
            mostrarCuotaMensual(monto);          

            
            
        }

        botonDos.onclick = () => {
            
            monto = 20000;

            const pUno = document.getElementById("pUno");
            pUno.remove();
            botonUno.remove();

            const pTres = document.getElementById("pTres");
            pTres.remove();
            botonTres.remove();

            const pCuatro = document.getElementById("pCuatro");
            pCuatro.remove();
            botonCuatro.remove();

            const pCinco = document.getElementById("pCinco");
            pCinco.remove();
            botonCinco.remove();


            mostrarCuotas();

            mostrarCuotaMensual(monto);

        }

        botonTres.onclick = () => {
            
            monto = 30000;

            const pUno = document.getElementById("pUno");
            pUno.remove();
            botonUno.remove();

            const pDos = document.getElementById("pDos");
            pDos.remove();
            botonDos.remove();

            const pCuatro = document.getElementById("pCuatro");
            pCuatro.remove();
            botonCuatro.remove();

            const pCinco = document.getElementById("pCinco");
            pCinco.remove();
            botonCinco.remove();
            mostrarCuotas();

            mostrarCuotaMensual(monto);

        }

        botonCuatro.onclick = () => {
            
            monto = 40000;
            const pUno = document.getElementById("pUno");
            pUno.remove();
            botonUno.remove();

            const pDos = document.getElementById("pDos");
            pDos.remove();
            botonDos.remove();

            const pTres = document.getElementById("pTres");
            pTres.remove();
            botonTres.remove();

            const pCinco = document.getElementById("pCinco");
            pCinco.remove();
            botonCinco.remove();
            
            mostrarCuotas();

            mostrarCuotaMensual(monto);

        }

        botonCinco.onclick = () => {
            
            monto = 50000;

            
            const pUno = document.getElementById("pUno");
            pUno.remove();
            botonUno.remove();

            const pDos = document.getElementById("pDos");
            pDos.remove();
            botonDos.remove();

            const pTres = document.getElementById("pTres");
            pTres.remove();
            botonTres.remove();

            const pCuatro = document.getElementById("pCuatro");
            pCuatro.remove();
            botonCuatro.remove();

            mostrarCuotas();

            mostrarCuotaMensual(monto);

        }} else {
        

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Su documento esta en nuestro registro de deudores!',
                footer: '<a href="">Ayuda</a>'
              })
        }
    })
    .catch((err) => console.log(err.message));
}


    



boton.onclick = () => {

    const documento = document.getElementById("documento");
    const boton = document.getElementById("boton");

    const nombre = document.getElementById("nombre");
    const tel = document.getElementById("telefono");
    const mail = document.getElementById("mail");

    const nombreValue = nombre.value;
    const docuValue = parseInt(documento.value);
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
    
    const documentoValue = parseInt(docuValue);
    
    validarDoc(documentoValue);
}

