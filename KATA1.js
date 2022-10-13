/* Carrera de caballos asincrono, (4) donde solo puede ganar uno, cuando gane uno, se logeara  */

class Caballo {
    constructor() {
        this.timeToComplete = Math.random()
    }
}


let caballo1 = new Caballo
let caballo2 = new Caballo
let caballo3 = new Caballo
let caballo4 = new Caballo

let speedsArray = []

console.log(speedsArray)

let promiseOfAllHorses = Promise.all([caballo1, caballo2, caballo3, caballo4])
    .then((values) => {
        values.forEach(element => {
            speedsArray.push(element.timeToComplete)
        })
        return speedsArray;
    })

race = horseSpeedArray => {
    return new Promise((res) => {
        const min = Math.min(...horseSpeedArray)
        res(console.log(min))
    })
}

promiseOfAllHorses
    .then(race)

