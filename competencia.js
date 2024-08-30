/***
 * 1 - Se desea realizar una aplicacion en javascript que almacene los nombres y tiempos (en minutos) de 10 mujeres que compiten en una carrera de atletismo de 1000 metros, e indique los datos de las 3 participantes que lograron mejor tiempo. Las competidoras largan la carrera en diferentes tiempos.
 */

const tiempos = [];
const arrayPodio = [];

function generarTiempos(tiemposIngreso) {
    for (let index = 0; index < 10; index++) {
        let tiempoAleatorio = Math.floor((Math.random() * 50));
        tiemposIngreso[tiemposIngreso.length] = tiempoAleatorio;
    }
}

generarTiempos(tiempos);
console.log(tiempos);

function menorTiempo(arrayTiempos, podio) {
    let menor = 99;
    let posicionMenor = -1;
    for (let index = 0; index < arrayTiempos.length; index++) {
        console.log(arrayTiempos[index], menor, podio[podio.length - 1]);
        
        if (arrayTiempos[index] < menor && arrayTiempos[index] > podio[podio.length]){
            menor = arrayTiempos[index];
            posicionMenor = index;
        }    
    }
    console.log("La posicion del menor es: ", posicionMenor, "y su valor", menor);

    return menor;
}

function posicionMenorTiempo(arrayTiempos, podio) {
    let menor = 99;
    let posicionMenor = -1;
    for (let index = 0; index < arrayTiempos.length; index++) {
        if (arrayTiempos[index] < menor && arrayTiempos[index] > podio[podio.length]){
            menor = arrayTiempos[index];
            posicionMenor = index;
        }    
    }
    console.log("La posicion del menor es: ", posicionMenor, "y su valor", menor);

    return posicionMenor;
}

// console.log("La posicion del menor es:",posicionMenorTiempo(tiempos));
function cargarPodio(tiempos, arrayPodio) {
    for (let cant = 1; cant <= 3; cant++) {
        let menor = menorTiempo(tiempos, arrayPodio);
        arrayPodio.push(menor);
    }
    console.log(arrayPodio);
}


cargarPodio(tiempos, arrayPodio);


