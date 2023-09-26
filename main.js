let listaDeGastos=JSON.parse(localStorage.getItem ("gastos")) || [];
let listaDeIngresos=JSON.parse(localStorage.getItem ("ingresos")) || [];
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
    if (!isNaN(monto)){
    let gasto= new Gastos(tipo,detalle,monto);
    balance=balance-gasto.monto;
    listaDeGastos.push(gasto);
    Swal.fire({
        icon: 'success',
        title: 'Excelente!',
        text: 'Se agrego GASTO correctamente!',
        });
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Cuidado!',
            text: 'Debes colocar una cifra aceptable en "monto"',
            })

    }
}
const crearIngreso=(tipo)=>{
        let detalle=document.getElementById("inp-detalle").value;
        let monto=parseFloat(document.getElementById("inp-monto").value);
        if (!isNaN(monto)){
        let ingreso= new Ingresos(tipo,detalle,monto);
        balance=balance+ingreso.monto;
        listaDeIngresos.push(ingreso);
        Swal.fire({
            icon: 'success',
            title: 'Excelente!',
            text: 'Se agrego INGRESO correctamente!',
            });
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Cuidado!',
                text: 'Debes colocar una cifra aceptable en "monto"',
                })
    
        }
    }
const tomarDatos=()=>{
    event.preventDefault();
        let tipo=document.getElementById("inp-tipo").value;
            if(tipo=='gasto'){
                crearGasto(tipo);
            }
            else if(tipo=='ingreso'){
                crearIngreso(tipo);
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Cuidado!',
                    text: 'alguna de las opciones no es correcta',
                    })
            }
}
const generarText=()=>{
    let bal=document.createElement('p')
    let contenedor=document.getElementById('container')
    contenedor.innerHTML=''
    bal.innerText=`su balance total es de $ ${balance}`
    contenedor.appendChild(bal)
    for (const gasto of listaDeGastos) {
        let detGastos=document.createElement('p')
        detGastos.innerText=`Gasto - ${gasto.detalle} - $ ${gasto.monto}`
        contenedor.appendChild(detGastos)
    }
    for (const ingreso of listaDeIngresos) {
        let detIngresos=document.createElement('p')
        detIngresos.innerText=`Ingreso - ${ingreso.detalle} - $ ${ingreso.monto}`
        contenedor.appendChild(detIngresos)
    }
    
}
const mostrarDatos=()=>{
    event.preventDefault();
    generarText();
    generarLocalStorage();

}
const generarLocalStorage=()=>{ 
localStorage.setItem("ingresos",JSON.stringify(listaDeIngresos))
localStorage.setItem("gastos",JSON.stringify(listaDeGastos))
}

const deleteLocal=()=>{
    localStorage.removeItem("gastos");
    localStorage.removeItem("ingresos");
}

let btnSendForm=document.getElementById('btn-send-form');
let btnListForm=document.getElementById('btn-list-form');
let btnDltLocal=document.getElementById('btn-dlt-local')
btnSendForm.addEventListener('click',tomarDatos);
btnListForm.addEventListener('click',mostrarDatos);
btnDltLocal.addEventListener('click',deleteLocal,);