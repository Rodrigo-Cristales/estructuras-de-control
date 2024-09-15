/*
Hacer una funcion la cual permita que la edad ingresada por el usuario
determine si es mayor de edad o no
*/

function edadUsuario (edad){
    if(edad >= 18){
        console.log("Eres mayor de edad")
    }else{
        console.log("Eres menor de edad")
    }
}

edadUsuario(17)