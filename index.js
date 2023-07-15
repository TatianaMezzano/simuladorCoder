let monto = prompt("Ingrese aquí el monto deseado para su préstamo (debe ser un número entre 10000 y 50000, múltiplo de 500):");
let montoNum = parseInt(monto);

function validarMonto(num){
   
    
    while ((num < 10000) || (num > 50000) || (num % 500 != 0)){
        monto = prompt("Ingrese un valor valido");
        num = parseInt(monto);
    } 

    return num;
    

}

montoValidado = validarMonto(montoNum);

function calcularMensualidad(num) {
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