let listaTotal=[];
let monto;
let detalle;
let total;
let continuar=true;
alert("Hola! , esto es un pequeño simulador de finanzas personales")
desplegarApp();

function desplegarApp(){

    total=parseFloat(prompt("Agregue el dinero total actual por favor"))
    if(total>=0){
        while(continuar===true){ 
            detalle=prompt("Coloque el detalle del gasto o ingreso.\n Coloque '1' si es un gasto \n coloque '2' si es un ingreso")
            monto=parseFloat(prompt("Ingrese por favor el monto a agregar"))
            if(detalle=='1'){
                alert("procesando gasto")
                let gasto = { tipo: "Gasto", monto:monto};
                listaTotal.push(gasto);
                total=total-monto;
                alert("el balance actual es de $" + total)
                let seguir=prompt("si desea continuar el balance coloque SI para confirmar")
                if(seguir=="SI"){
                }
                else{
                    alert("el balance total es de" + total + "con los siguientes items:")
                    for (let value of listaTotal) {

                        
                        let texto=document.createElement('p');
                        texto.innerText="tipo: " + value.tipo + " monto: $"+value.monto
                        let contenedor=document.getElementById("container")
                        contenedor.appendChild(texto);
                        
                    }
                    continuar=false
                    
                }
            }
            else if(detalle=='2'){
                alert("procesando Ingreso")
                let ingreso = { tipo: "Ingreso", monto:monto};
                listaTotal.push(ingreso);
                total=total+monto;
                alert("el balance actual es de $" + total)
                let seguir=prompt("si desea continuar el balance coloque SI para confirmar")
                if(seguir=="SI"){
                }
                else{
                    alert("el balance total es de" + total + "con los siguientes items:")
                    for (let value of listaTotal) {

                        
                        let texto=document.createElement('p');
                        texto.innerText="tipo: " + value.tipo + " monto: $"+value.monto
                        let contenedor=document.getElementById("container")
                        contenedor.appendChild(texto);
                        
                    }
                    continuar=false
                    
                }
            }
            else{
                alert("por favor coloque una opcion valida")
            }
        }}
    else{
        alert("Coloque un numero mayor o igual a cero por favor")
    }
}


