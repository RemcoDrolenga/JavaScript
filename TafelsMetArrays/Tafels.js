let ArrayEen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function Tafel2(ArrayEen) {
    let arrayTwee = []
    let TafelVan2 = document.getElementById("TafelVan2")
    for (let i = 0; i < ArrayEen.length; i++) {
        arrayTwee[i] = ArrayEen[i] * 2
        TafelVan2.innerHTML += ArrayEen[i] + " * 2 = " + arrayTwee[i] + "<br>"
    }
}
Tafel2(ArrayEen)

function Tafel4(ArrayEen) {
    let arrayTwee = []
    let TafelVan4 = document.getElementById("TafelVan4")
    for (let i = 0; i < ArrayEen.length; i++) {
        arrayTwee[i] = ArrayEen[i] * 4
        TafelVan4.innerHTML += ArrayEen[i] + " * 4 = " + arrayTwee[i] + "<br>"
    }
}
Tafel4(ArrayEen)

function Tafel6(ArrayEen) {
    let arrayTwee = []
    let TafelVan6 = document.getElementById("TafelVan6")
    for (let i = 0; i < ArrayEen.length; i++) {
        arrayTwee[i] = ArrayEen[i] * 6
        TafelVan6.innerHTML += ArrayEen[i] + " * 6 = " + arrayTwee[i] + "<br>"
    }
}
Tafel6(ArrayEen)

function Tafel8(ArrayEen) {
    let arrayTwee = []
    let TafelVan8 = document.getElementById("TafelVan8")
    for (let i = 0; i < ArrayEen.length; i++) {
        arrayTwee[i] = ArrayEen[i] * 8
        TafelVan8.innerHTML += ArrayEen[i] + " * 8 = " + arrayTwee[i] + "<br>"
    }
}
Tafel8(ArrayEen)