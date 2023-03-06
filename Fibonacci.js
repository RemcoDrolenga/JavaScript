let nummer1 = 0
let nummer2 = 1


function Fibonacci(Getal1, Getal2){
  let doorgaan = "doorgaan"
  while (doorgaan == "doorgaan"){
    Getal2 = Getal1 + Getal2
    Getal1 = Getal1 + Getal2
    console.log(Getal2)
    console.log(Getal1)
    if (Getal1 >= 1000000){
      doorgaan = "stop"
    }
  }
}

Fibonacci(nummer1, nummer2)