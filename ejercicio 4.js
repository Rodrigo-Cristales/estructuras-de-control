/*
Crear una función que en base a 2 números enteros que ingrese el usuario, 
calcular cual número es el mayor y devolverlo. 
 */

function numeroMayor(numero1, numero2){
    let numero_mayor;

    if(numero1 > numero2){
        numero_mayor = numero1

    }else if(numero2 > numero1){
        numero_mayor = numero2
    } else {
        console.log("Ambos numeros son iguales ")
        return;
    }
    console.log("El numero mayor entre " + numero1 + " y " + numero2 + " Es el numero: " + numero_mayor)
}

numeroMayor(7, 4)