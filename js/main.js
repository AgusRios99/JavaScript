// ciclo con alert para que no ingrese otra cosa que no sea un numero para el pago de cuota
let montoIngresado
do {
    montoIngresado = parseFloat(prompt("ingrese el monto que desea solicitar"));
} while (isNaN(montoIngresado))

// ciclo con alert, para que no me permita ingresar otra cosa que no sea el plan de cuotas
let cuotaIngresada
do {
    cuotaIngresada = parseFloat(prompt("ingrese si lo requiere en 12, 24, O 36"));
    if (cuotaIngresada !== 12 && cuotaIngresada !== 24 && cuotaIngresada !== 36 ) {
        alert("Plan de cuotas no permitido ")
    }
} while (cuotaIngresada !== 12 && cuotaIngresada !== 24 && cuotaIngresada !== 36 );

//valor del interes por plan de cuotas

let cuota12 = 0.2;
let cuota24 = 0.4;
let cuota36 = 0.6;

//funcion

function calcular(monto, cuota, ) {

    if (cuota <= 12) {
        return monto * cuota12 * 12;
    } else if (cuota >= 12 && cuota <= 24) {
        return monto * cuota24 * 24;
    } else if (cuota >= 24 && cuota <= 36) {
        return monto * cuota36 * 36;
    }
}

let operacion = calcular(montoIngresado, cuotaIngresada);
alert("Solicitaste $" + montoIngresado + " " + "en" + " " + cuotaIngresada + " cuotas y pagas $"+ operacion); 
console.log(operacion)