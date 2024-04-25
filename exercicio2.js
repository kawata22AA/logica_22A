const input = require ("prompt-sync")()


let codigo= Number( input("Digite seu codigo:"))
let numero = Number( input("Digite seu numero:"))
let valor = Number( input("Digite seu valor unitário:"))

let codigo2 = Number( input("Digite seu codigo2:"))
let numero2 = Number( input("Digite seu numero2:"))
let valor2 = Number( input("Digite seu valor unitário2:"))

let total = numero*valor
let total2 = numero2*valor2

console.log(total + total2);



