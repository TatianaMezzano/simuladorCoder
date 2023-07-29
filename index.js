class Cliente {

    constructor(nombre, documento, edad, direccion){
        this.nombre = nombre;
        this.documento = documento;
        this.edad = edad;
        this.direccion = direccion;
    }

} 

const documentosDeudores = [12345678, 23456789, 98765432, 87654321]

const clienteUno = new Cliente(prompt("Ingrese su nombre: "), prompt("Ingrese su documento: "), prompt("Ingrese su edad: "), prompt("Ingrese su direccion: "));

clienteUno.documento = parseInt(clienteUno.documento);
let i = 0;

while (i <= documentosDeudores.length && clienteUno["documento"] != documentosDeudores[i]){
    i ++;
}

if (i > documentosDeudores.length) {

    let monto = prompt("Ingrese aquí el monto deseado para su préstamo (debe ser un número entre 10000 y 50000, múltiplo de 500):");
    let montoNum = parseInt(monto);

    const validarMonto = num => {
        while ((num < 10000) || (num > 50000) || (num % 500 != 0)){
            monto = prompt("Ingrese un valor valido");
            num = parseInt(monto);
        } 

        return num;
    }

   
    let montoValidado = validarMonto(montoNum);



    const calcularMensualidad = num => {

        let cuotas = prompt("Ingrese el numero de cuotas (debe ser un número entre 1 y 12):");

        switch (cuotas) {
            case "1":
                num = num + (num * 0.05);    
                break;
            case "2":
                num = (num / 2) + (num * 0.10);
                break;
            case "3":
                num = (num / 3) + (num * 0.15);
                break;
            case "4":
                num = (num / 4) + (num * 0.20);
                break;
            case "5":
                num = (num / 5) + (num * 0.25);
                break;
            case "6":
                num = (num / 6) + (num * 0.30);
                break;
            case "7":
                num = (num / 7) + (num * 0.35);
                break;
            case "8":
                num = (num / 8) + (num * 0.40);
                break;
            case "9":
                num = (num / 9) + (num * 0.45);
                break;
            case "10":
                num = (num / 10) + (num * 0.50);
                break;
            case "11":
                num = (num / 11) + (num * 0.55);
                break;
            case "12":
                num = (num / 12) + (num * 0.60);
                break;
                
            
        }

        return num;


    }

  

    let cuotaMensual = calcularMensualidad(montoValidado);

    alert("su cuota mensual será de: $" + cuotaMensual);

} else {
    alert("Su documento está en la lista de deudores. No puede acceder a nuestros préstamos.")
}
