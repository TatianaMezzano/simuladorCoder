const documentosDeudores = [12345678, 23456789, 98765432, 87654321];


let docu = document.getElementById("documento");
let documento = docu.value;
documento = parseInt(documento)


const creacionFormDos = () => {
    let formularioDos=document.createElement("form");
 
		
 
        let trabajoLabel=document.createElement("label");		
        let trabajo=document.createElement("input");
 
        let antiguedadLabel=document.createElement("label");
		let antiguedad=document.createElement("input");
 
        let sueldoLabel=document.createElement("label");
		let sueldo=document.createElement("input");
 
        let montoLabel=document.createElement("label");
		let monto=document.createElement("input");

        let botonDos=document.createElement("input");
 
		
 
		//Asignar atributos al formulario
        	formularioDos.setAttribute('method', "post");
        	formularioDos.setAttribute('action', "");
 
        	//Asignar atributos a la caja de trabajo
        	trabajo.setAttribute('type', "text");
            trabajo.setAttribute('id', "trabajo")
            trabajoLabel.setAttribute('for', "trabajo")
            trabajoLabel.innerText = "Trabajo: "
 
        	//Asignar atributos a la caja de antiguedad
        	antiguedad.setAttribute('type', "text");
        	antiguedad.setAttribute('id', "antiguedad");
            antiguedadLabel.setAttribute('for', "antiguedad")
            antiguedadLabel.innerText = "Antiguedad: "
 
        	//Asignar atributos a la caja de sueldo
        	sueldo.setAttribute('type', "number");
        	sueldo.setAttribute('id', "sueldo");
            sueldoLabel.setAttribute('for', "sueldo")
            sueldoLabel.innerText = "Sueldo: "
 
        	//Asignar atributos a la caja de monto
        	monto.setAttribute('type', "number");
        	monto.setAttribute('id', "monto");
            montoLabel.setAttribute('for', "monto")
            montoLabel.innerText = "Monto solicitado: "
 
        	
		//Asignar atributos al boton
		    botonDos.setAttribute('type', "button");	
        	botonDos.setAttribute('value', "Validar");
            botonDos.setAttribute('id', "botonDos");
 
            formularioDos.appendChild(trabajoLabel);
        	formularioDos.appendChild(trabajo);
            formularioDos.appendChild(antiguedadLabel);
        	formularioDos.appendChild(antiguedad);
            formularioDos.appendChild(sueldoLabel);
        	formularioDos.appendChild(sueldo);
            formularioDos.appendChild(montoLabel);
        	formularioDos.appendChild(monto);
        	formularioDos.appendChild(botonDos);
        	document.body.append(formularioDos);
}

const creacionFormTres = () => {


            let formularioTres=document.createElement("form");

            let cuotasLabel=document.createElement("label");		
            let cuotas=document.createElement("input");

            let botonTres=document.createElement("input");


            formularioTres.setAttribute('method', "post");
        	formularioTres.setAttribute('action', "");
 
        	//Asignar atributos a la caja de cuotas
            cuotas.setAttribute('id', "cuotas")
            cuotas.setAttribute('type', "number")
            cuotasLabel.setAttribute('for', "cuotas")
            cuotasLabel.innerText = "Cuotas (1, 2, 3, 6, 9 o 12): "




            botonTres.setAttribute('type', "button");
        	botonTres.setAttribute('value', "OK");
            botonTres.setAttribute('id', "botonTres");

            formularioTres.appendChild(cuotasLabel);
            formularioTres.appendChild(cuotas);
            formularioTres.appendChild(botonTres);
            document.body.append(formularioTres);
}

let botonUno = document.getElementById("botonUno");

botonUno.onclick = (documento) => {
    
    let i = 0;
   
    while (i < documentosDeudores.length && documento != documentosDeudores[i]){
        i ++;
    }
    
    if (i >= documentosDeudores.length) {


        creacionFormDos();    
      
        let sueldo = document.getElementById("sueldo");
        let monto = document.getElementById("monto");
        let botonDos = document.getElementById("botonDos");

        let sueldoNum = parseInt(sueldo.value)
        let montoNum = parseInt(monto.value)

        const validacionDos = (sueldoNum, montoNum) => {
            if (montoNum <= sueldoNum ) {
                creacionFormTres();
            } else {
                let mensaje = document.createElement("p");  
                mensaje.innerText = "no puede acceder a un prestamo tan grande"
                document.body.append(mensaje);

            }
            }
        botonDos.addEventListener("click", validacionDos);

        let inputCuotas = document.getElementById("cuotas")
        let numeroCuotas = inputCuotas.value;

        botonTres.onclick = (numeroCuotas) => {
            

            let cuotaMensual;
            switch (numeroCuotas) {

                case "1":
                    cuotaMensual = montoNum * 1.07;    
                    break;
                case "2":
                    cuotaMensual = (montoNum * 1.09) / 2;    
                    break;
                case "3":
                    cuotaMensual = (montoNum * 1.15) / 3;
                    break;
                case "6":
                    cuotaMensual = (montoNum * 1.20) / 6;
                    break;
                case "9":
                    cuotaMensual = (montoNum * 1.35) / 9;
                    break;
                case "12":
                    cuotaMensual = (montoNum * 1.5) / 12;
                    break;                   
                
            }

            console.log(cuotaMensual)
    
        } 
    
    
    
}else {
        let mensajeDeudor = document.createElement("p");  
        mensajeDeudor.innerText = "no puede acceder a nuestros prestamos"
        document.body.append(mensajeDeudor);
    }

}
