/*
Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen = 20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final
*/


function notas(nombre, carnet, examen, tareas, asistencia, investigación){

    let nota_de_examen = examen * 0.2;
    let nota_de_tareas = tareas * 0.4;
    let nota_asistencia = asistencia * 0.1;
    let nota_investigacion = investigación * 0.3;
    let nota_final = nota_de_examen + nota_de_tareas + nota_asistencia + nota_investigacion;
    console.log("Tu nombre es : " + nombre + " con carnet: " + carnet + ", Su nota final es de: " + nota_final )
}

notas("Rodrigo", 114724, 10,10,10,10);
