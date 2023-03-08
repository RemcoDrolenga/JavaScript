let arrayEen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrayTwee = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

function Optellen(arrayEen, arrayTwee) {
    let arrayDrie = []
    let Optellen = document.getElementById("Optellen")
    for (let i = 0; i < arrayEen.length; i++) {
        arrayDrie[i] = arrayEen[i] + arrayTwee[i]
        Optellen.innerHTML += arrayEen[i] + " + " + arrayTwee[i] + " = " + arrayDrie[i] + "<br>"
    }
}
Optellen(arrayEen, arrayTwee)

function Aftrekken(arrayEen, arrayTwee) {
    let arrayDrie = []
    let Aftrekken = document.getElementById("Aftrekken")
    for (let i = 0; i < arrayEen.length; i++) {
        arrayDrie[i] = arrayTwee[i] - arrayEen[i]
        Aftrekken.innerHTML += arrayEen[i] + " - " + arrayTwee[i] + " = " + arrayDrie[i] + "<br>"
    }
}
Aftrekken(arrayEen, arrayTwee)

function Vermenigvuldigen(arrayEen, arrayTwee) {
    let arrayDrie = []
    let Vermenigvuldigen = document.getElementById("Vermenigvuldigen")
    for (let i = 0; i < arrayEen.length; i++) {
        arrayDrie[i] = arrayEen[i] * arrayTwee[i]
        Vermenigvuldigen.innerHTML += arrayEen[i] + " * " + arrayTwee[i] + " = " + arrayDrie[i] + "<br>"
    }
}
Vermenigvuldigen(arrayEen, arrayTwee)

function Delen(arrayEen, arrayTwee) {
    let arrayDrie = []
    let Delen = document.getElementById("Delen")
    for (let i = 0; i < arrayEen.length; i++) {
        arrayDrie[i] = arrayTwee[i] / arrayEen[i]
        Delen.innerHTML += arrayEen[i] + " / " + arrayTwee[i] + " = " + arrayDrie[i] + "<br>"
    }
}
Delen(arrayEen, arrayTwee)




