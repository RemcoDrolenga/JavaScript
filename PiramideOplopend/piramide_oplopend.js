let getal = prompt("voer een getal in:")

let piramide = []

let piramideOplopend = document.getElementById("piramide")
let piramideArray = document.getElementById("piramideArray")

function PiramideOplopend(getal) {
    for (let i = 0; i <= getal; i++) {
        piramide.push(i)
    }

    piramideArray.innerHTML += "Array : " + piramide+ "<br>"

    for (let i = 0; i <= getal; i++) {
        let numbers = ""
        for (let addNumber = 0; addNumber <= i; addNumber++) {
            numbers += piramide[addNumber].toString()
        }
        piramideOplopend.innerHTML += numbers + "<br>"
        console.log(numbers)
    }    
}

PiramideOplopend(getal)