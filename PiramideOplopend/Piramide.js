let getal = prompt("voer een getal in:")

let piramide = []
let piramideOplopend = document.getElementById("piramide")

for (let i = 0; i <= getal; i++) {
    piramide.push(i)
    piramideOplopend.innerHTML += piramide + "<br>"
}