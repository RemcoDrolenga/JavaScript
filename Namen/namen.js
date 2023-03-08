let Namen = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3")

let Naam = []

for (let i = 0; i < Namen; i++) {
  Naam.push(prompt("Voer een naam in"))
}

let AlleNamen = document.getElementById("AlleNamen")
AlleNamen.innerHTML = Naam

let AlleNamenOmgekeerd = document.getElementById("AlleNamenOmgekeerd")
AlleNamenOmgekeerd.innerHTML = Naam.reverse()