let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const div = firstNumber / secondNumber
const mult = firstNumber * secondNumber
const rest = firstNumber % secondNumber
const same = firstNumber == secondNumber

alert("A soma dos numeros é: " + sum)
alert("A subtração dos numeros é: " + sub)
alert("A divisão dos numeros é: " + div)
alert("A multiplicação dos numeros é: " + mult)
alert("O resto é igual a: " + rest)

if(same){
  alert("Os números adicionados são iguais")
} else{
  alert("Os numeros não são correspondentes")
}

if(sum % 2 === 0){
 alert("A soma dos números é par")
} else{
  alert("A soma dos números é impar")
}