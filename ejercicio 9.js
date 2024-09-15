/*Crear programa donde se introduce una temperatura en Celsius y salga el resultado en 
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida*/

function calcularTemperatura(Celsius){
    console.log("La temperatura ingresada es de: " + Celsius)
    //aqui convierto los celsius a fahrenheit con la formula necesaria

    let Fahrenheit = (Celsius * 9/5) + 32;
    
    console.log("Su temperatura convertida a fahrenheit es : " + Fahrenheit);
    if (Fahrenheit >= 14 && Fahrenheit < 32){
        console.log("Temperatura baja")
    }else if (Fahrenheit >= 32 && Fahrenheit < 68){
        console.log("La temperatura es adecuada")
    }else if (Fahrenheit >= 68 && Fahrenheit < 96){
        console.log("Temperatura alta")
    }else
    console.log("Temperatura desconocida")
}
//Aqui ingresar la temperatura a celcius, numeros negativos es la temperatura mas baja
calcularTemperatura(-5.0)