/*Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: 
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares. */


//Primero voy a crear los campos para poder ingresar diez numeros

document.addEventListener('DOMContentLoaded', function(){
    let campos = document.getElementById('campos')
    for(let i = 1; i <= 10; i++ ){
        let input = document.createElement('input')
        input.type = 'number';
        input.id = 'valores' + i;
        input.placeholder = 'ingrese algunos valores';
        campos.appendChild(input);
        campos.appendChild(document.createElement('br'));
    }
    document.getElementById("Campo1").addEventListener("submit", function(event){
    event.preventDefault();
//Procedo a declarar variables con un contador 0
        let numerosPositivos = 0;
        let numerosNegativos = 0;
        let numeros_multiplos_15 = 0;
        let numeros_pares = 0;
//Utilizo el bucle for para recorrer los diez valores

        for(let i = 1; i <= 10; i++){
            let valores = parseInt(document.getElementById('valores'+i).value)
//Utilizo la estructura de control if y de ese modo cuando un numero sea ingresado se le sumara a la variable
//que corresponda

            if(valores > 0){
                numerosPositivos ++;

            }else if(valores < 0){
                numerosNegativos ++;

            }if(valores % 15 === 0){
                numeros_multiplos_15 ++;

            }if (valores % 2 === 0){
                numeros_pares += valores
            }
        }
        //muestro los resultados en los parrafos usando la propiedad textContent
        document.getElementById("numeros_positivos").textContent ="Cantidad de numeros positivos: " + numerosPositivos
        document.getElementById("numeros_negativos").textContent ="Cantidad de numeros negativos: " + numerosNegativos
        document.getElementById("numeros_multiplos_de_15").textContent ="Cantidad de numeros multiplos de 15 : " + numeros_multiplos_15
        document.getElementById("numeros_pares").textContent ="Cantidad de numeros pares: " + numeros_pares;
    })
})