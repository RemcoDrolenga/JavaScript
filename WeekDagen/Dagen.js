const Weekdagen = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"]
const WeekDagenOmgekeerd = ["Zondag", "Zaterdag", "Vrijdag", "Donderdag", "Woensdag", "Dinsdag", "Maandag"]

let AlleDagen = document.getElementById("AlleDagen")
AlleDagen.innerHTML = Weekdagen

let WerkDagen = document.getElementById("WerkDagen")
WerkDagen.innerHTML = Weekdagen.slice(0, 5)

let WeekendDagen = document.getElementById("WeekendDagen")
WeekendDagen.innerHTML = Weekdagen.slice(5, 7)

let AlleDagenOmgekeerd = document.getElementById("AlleDagenOmgekeerd")
AlleDagenOmgekeerd.innerHTML = Weekdagen.reverse()

let WerkDagenOmgekeerd = document.getElementById("WerkDagenOmgekeerd")
WerkDagenOmgekeerd.innerHTML = WeekDagenOmgekeerd.slice(2, 7)

let WeekendDagenOmgekeerd = document.getElementById("WeekendDagenOmgekeerd")
WeekendDagenOmgekeerd.innerHTML = WeekDagenOmgekeerd.slice(0, 2)
