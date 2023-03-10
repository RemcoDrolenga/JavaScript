let getal = prompt("voer een getal in:")

let piramide = []

let piramideAflopend = document.getElementById("piramide")
let piramideArray = document.getElementById("piramideArray")

function PiramideAflopend(getal) {
    for (let i = 0; i <= getal; i++) {
        piramide.push(i)  
    }
    
    piramideArray.innerHTML += "Array : " + piramide;

    for (let i = getal; i >= 0; i--) {
        let numbers = ""
        for (let addNumber = 0; addNumber <= i; addNumber++) {
            numbers += piramide[addNumber].toString()
        }
        piramideAflopend.innerHTML += numbers + "<br>"
    }

}

PiramideAflopend(getal)


