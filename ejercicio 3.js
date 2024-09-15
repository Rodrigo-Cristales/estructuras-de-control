/*
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y 
aumento. Deberá demostrar los datos del empleado y el aumento salarial.

*/

function aumentoSalarial(nombre, salario, categoría){
    let aumento = 0;

    switch (categoría){
        case "A" :
            aumento = 0.15
            break

        case "B":
            aumento = 0.30
            break
        case "C": 
            aumento = 0.10
            break
        case "D" :
            aumento = 20 
            break
        
        default:
            console.log("La categoria ingresada no es validad")
    }
        let aumento_salarial = salario * aumento;

        console.log("Su nombre es: " + nombre + " la categoria que eligio es : " + categoría + " Su salario es de: " + salario + "  su aumento es de : " + aumento_salarial);

}

aumentoSalarial("Rodrigo", 300, "B")

//aqui puede modificar las opciones entre "A", "B", "C", "D"


