let listaDeGastos=[];
let listaDeIngresos=[];
let balance=0;
class Ingresos{
    constructor(tipo,detalle,monto){
        this.tipo=tipo
        this.detalle=detalle
        this.monto=monto
    }
};
class Gastos{
    constructor(tipo,detalle,monto){
        this.tipo=tipo
        this.detalle=detalle
        this.monto=monto
    }
};
const crearGasto=(tipo)=>{
    let detalle=document.getElementById("inp-detalle").value;
    let monto=parseFloat (document.getElementById("inp-monto").value);
    let gasto= new Gastos(tipo,detalle,monto);
    balance=balance-gasto.monto;
    listaDeGastos.push(gasto);
    alert("se agrego gasto correctamente");
}
const crearIngreso=(tipo)=>{
        let detalle=document.getElementById("inp-detalle").value;
        let monto=parseFloat(document.getElementById("inp-monto").value);
        let ingreso= new Ingresos(tipo,detalle,monto);
        balance=balance+ingreso.monto;
        listaDeIngresos.push(ingreso);
        alert("se agrego ingreso correctamente");
    }
const tomarDatos=()=>{
    event.preventDefault();
        let tipo=document.getElementById("inp-tipo").value;
            if(tipo==='gasto'){
                crearGasto(tipo);
            }
            else if(tipo==='ingreso'){
                crearIngreso(tipo);
            }
            else{
                alert("coloque una opcion valida")
            }
}
const generarText=()=>{
    let bal=document.createElement('p')
    let contenedor=document.getElementById('container')
    bal.innerText=`su balance total es de $ ${balance}`
    contenedor.appendChild(bal)
    for (const gasto of listaDeGastos) {
        let detGastos=document.createElement('p')
        detGastos.innerText=`Gasto - ${gasto.detalle} - ${gasto.monto}`
        contenedor.appendChild(detGastos)
    }
    for (const ingreso of listaDeIngresos) {
        let detIngresos=document.createElement('p')
        detIngresos.innerText=`Gasto - ${ingreso.detalle} - ${ingreso.monto}`
        contenedor.appendChild(detIngresos)
    }

}
const mostrarDatos=()=>{
    event.preventDefault();
    generarText();

}

let btnSendForm=document.getElementById('btn-send-form');
let btnListForm=document.getElementById('btn-list-form');

btnSendForm.addEventListener('click',tomarDatos);
btnListForm.addEventListener('click',mostrarDatos);