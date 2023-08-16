
let monto;
let meses;
let continuar=true;
function calculadora(){
    while(continuar===true){

    monto=prompt("Vamos a simular tu prestamo, a continuacion indica cuanto deseas solicitar por favor;");
    meses=prompt("coloque la cantidad de cuotas que desea abonar");
        if (monto<50000 && meses<6){
        Cuotas= monto*1.8/meses;
        alert("tu prestamo por  "+monto+" a " +meses+" meses es de "+Cuotas+" cada mes para finarlizar el pago");
        }
        else if(monto<50000 && meses>=6 || monto>50000 && meses<6){
            Cuotas= monto*2.2/meses;
            alert("tu prestamo por  "+monto+" a " +meses+" meses es de "+Cuotas+" cada mes para finarlizar el pago");
            }
        else if(monto>50000 && meses<6){
            Cuotas= monto*3.5/meses;
            alert("tu prestamo por  "+monto+" a " +meses+" meses es de "+Cuotas+" cada mes para finarlizar el pago");
            }
            else{
                alert("ingrese por favor datos validos (numeros positivos,caracteres validos ,etc)");
            };
        respuesta=prompt("Desea realizar otra simulacion? coloque SI o NO↓");
        if(respuesta==="SI"){
            alert("continuamos con las simulaciones!");
        } else if(respuesta==="NO"){
            alert("Gracias por utilizar nuestro servicio!");
            continuar=false;
            break
        }
        else{
            alert("Por favor coloque una opcion valida")
        }
    }
}

calculadora();