/*EJERCICIO 8: 
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado 
por el usuario.*/

function tabla_multiplicar(numero){
    console.log("Tabla de multplicar del numero" + numero)
    for (let i = 1; i< 11; i++ ){
        console.log(numero + " x " + i + " = " + (numero * i) )
    }
        
}
//aqui ingresar que tabla de multiplicar quiere
tabla_multiplicar(5)
