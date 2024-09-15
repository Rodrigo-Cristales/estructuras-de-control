/*
Crear una Función para calcular el descuento en viajes turísticos tomando 
en cuenta lo siguiente: 
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el 
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino 
es Puerto el Triunfo el descuento será del 15%.
 */




//Aqui declaro la funcion para saber que destino fue seleccionado el usuario y de que ciudad es
function descuentos(destino){
        let descuento = 0;
        let precio = 0;
        let ciudadOrigen = 'No tiene ciudad origen'
        
        //Aqui valido los datos de los inputs para saber de que ciudad es si es Palma Se realiza el descuento
        let Origen1 = document.getElementById("ciudad_origen1").value;
        let Origen2 = document.getElementById("ciudad_origen2").value;
        let Origen3 = document.getElementById("ciudad_origen3").value;

//Utilizo la estructura de control if para determinar si cumple las condiciones para los decuentos
        if(destino ==='Costa del sol'){
            precio = 200
            ciudadOrigen = Origen1
            if(Origen1 === 'Palma'){
                descuento = 0.05
            }else{
                descuento = 0;
            }
        }else if (destino ==='Pachimalco'){
            precio = 500;
            ciudadOrigen = Origen2;
            if(Origen2 === 'Palma'){
                descuento = 0.10
            }else{
                descuento = 0;
            }
        }else if(destino === 'Trinfuo'){
            precio = 500;
            ciudadOrigen = Origen3;
            if(Origen3 === 'Palma'){
                descuento = 0.15;
            }else{
                descuento = 0;
            }
        }
        //Aqui reazlizo estas variables para determinar de cuanto sera el descuento y cual sera el precio fianl
        let descuento_total = precio * descuento
        let precioFinal = precio - descuento_total

        //Muestro el resultado a la hora de oprimir el boton en u alert 

        alert("El destino que seleccionaste fue " + destino + "\n" + 
            "Su ciudad de origen es " + ciudadOrigen + "\n" +
            "El precio original de su viaje es de $" + precio + "\n" + 
            "El descuento por su ciudad de origen es de " + (descuento * 100) + "%\n" +
            "El precio final es de $" + precioFinal )
        }
    