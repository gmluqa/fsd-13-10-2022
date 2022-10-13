const imThePromiseOfANumber = new Promise((rs, rj) => {
    /* Events happen */
    let elNumPrometido = 4;
    // resolve the promise 
    rs(elNumPrometido)
    // reject the promise
    rj()



})

// Promise is a class that takes in a function as a param 

//promise no longer need a cb

const cascarHuevo = (huevo) => {
    return new Promise((rs) => {
        console.log(huevo)
        setTimeout(() => rs('toma un huevo abierto'), 1000)
    });
}

const batir = (huevosAbiertos) => {
    return new Promise((rs, rj) => {
        console.log(huevosAbiertos)
        setTimeout(() => rs('toma huevos batidos'), 5000)
    });
}

// const freir = (huevosBatidos, sarten) => {
//     return new Promise((rs, rj) => {
//         console.log(huevosBatidos, sarten)
//         setTimeout()
//     })
// }

let huevoAbiertoPromise1 = cascarHuevo('huevo 1')
let huevoAbiertoPromise2 = cascarHuevo('huevo 2')
let huevoAbiertoPromise3 = cascarHuevo('huevo 3')
let huevoAbiertoPromise4 = cascarHuevo('huevo 4')

let todosLosHuevosAbiertosPromise = Promise.all([huevoAbiertoPromise1, huevoAbiertoPromise2, huevoAbiertoPromise3, huevoAbiertoPromise4])

todosLosHuevosAbiertosPromise.
    then((huevosAbiertos) => {
        let huevosBatidosPromise = batir(huevosAbiertos)
        huevosBatidosPromise.then(() => {

        })
            .catch((error) => {
                // manejamos el error
            })
    })


////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////////////////////////////////////////////////////
