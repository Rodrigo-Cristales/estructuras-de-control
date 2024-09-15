let click1 = document.getElementById("click1");
let click2 = document.getElementById("click2");
let click3 = document.getElementById("click3");

click1.addEventListener("click", () => decuento('FORD FIESTA'));

click2.addEventListener("click", () => decuento('FORD FOCUS'));

click3.addEventListener("click", () => decuento('FORD ESCAPE'));

function descuentos(coches){
    let precio, decuento;
    switch(coches){
        case 'FORD FIESTA':
            precio = 20000;
            decuento = 0.05
            break
        case 'FORD FOCUS':
            precio = 10000;
            decuento = 0.10
            break;
        case 'FORD ESCAPE':
            precio = 30000;
            decuento = 0.20;
            break;
            default:
                alert("El coche no a sido encontrado");
                return;
    }
    let descuentoFinal = precio*decuento
    let montoFinal = precio-descuentoFinal

    alert("El coche que compraste es: " + coches + "\n" +
        "El precio original es: $" + precio.toFixed(2) + "\n" + "El descuento es: " + (decuento * 100) + "%\n" + "El precio final es de con su descuento : $" + montoFinal.toFixed(2));
}


