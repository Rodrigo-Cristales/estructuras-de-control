/*
EJERCICIO 10: 
Se cuenta con la siguiente información: 
• Las edades de 5 estudiantes del turno mañana. 
• Las edades de 6 estudiantes del turno tarde. 
• Las edades de 11 estudiantes del turno noche. 
Nota: Las edades de cada estudiante se deberán ingresar por la web. 
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un 
promedio de edades mayor
*/

function cacularPromedio(){
    //aqui creo variables para poder interactuar con los datos del input en este caso input tipo number
    let dia = [
        parseInt(document.getElementById("almuno_mañana1").value),
        parseInt(document.getElementById("almuno_mañana2").value),
        parseInt(document.getElementById("almuno_mañana3").value),
        parseInt(document.getElementById("almuno_mañana4").value),
        parseInt(document.getElementById("almuno_mañana5").value),
    ]
    let tarde = [
        parseInt(document.getElementById("almuno_tarde1").value),
        parseInt(document.getElementById("almuno_tarde2").value),
        parseInt(document.getElementById("almuno_tarde3").value),
        parseInt(document.getElementById("almuno_tarde4").value),
        parseInt(document.getElementById("almuno_tarde5").value),
        parseInt(document.getElementById("almuno_tarde6").value),
    ]
    let noche = [
        parseInt(document.getElementById("almuno_noche1").value),
        parseInt(document.getElementById("almuno_noche2").value),
        parseInt(document.getElementById("almuno_noche3").value),
        parseInt(document.getElementById("almuno_noche4").value),
        parseInt(document.getElementById("almuno_noche5").value),
        parseInt(document.getElementById("almuno_noche6").value),
        parseInt(document.getElementById("almuno_noche7").value),
        parseInt(document.getElementById("almuno_noche8").value),
        parseInt(document.getElementById("almuno_noche9").value),
        parseInt(document.getElementById("almuno_noche10").value),
        parseInt(document.getElementById("almuno_noche11").value),
    ]

//Utilizo una funcion anidada para calcular el promedio en edades
    function cacularEdadesPromedio(edades){
        let  edadPromedio = edades.reduce((acum, edad) => acum + edad , 0);
        return edadPromedio / edades.length;
    }
    let promedios_de_mañana = cacularEdadesPromedio(dia);
    let promedios_de_tarde = cacularEdadesPromedio(tarde);
    let promedios_de_noche = cacularEdadesPromedio(noche); 

//Aqui muestro el promedio en edades de cada turno utilizando etiquetas de parrafos

    document.getElementById("promedio_manana").textContent = "Promedios de edades en la mañana: " + promedios_de_mañana;
    document.getElementById("promedio_tarde").textContent = "Promedios de edades en la tarde: " + promedios_de_tarde;
    document.getElementById("promedio_noche").textContent = "Promedios de edades en la noche: " + promedios_de_noche;

//determino cual turno tiene mayor promedio de edades 
    
    let promedioMayor;
    if(promedios_de_mañana > promedios_de_tarde && promedios_de_mañana > promedios_de_noche){
        promedioMayor = "El turno con mayor promedio en edades es el turno de la mañana";
    } else if (promedios_de_tarde > promedios_de_mañana && promedios_de_tarde > promedios_de_noche){
        promedioMayor = "El turno con mayor promedio en edades es el turno de tarde";
    } else {
        promedioMayor = "El turno con mayor promedio en eddades es el turno de noche";
    }
    document.getElementById("promedio_mayor").textContent = promedioMayor; 
}