// alert('Hello world!')

/* const firstNumber = prompt('Insira um número para saber os resultados das operações')
const secondNumber = prompt("Insira o segundo número")
alert(Number(firstNumber) + Number(secondNumber))
alert(Number(firstNumber) - Number(secondNumber))
alert(Number(firstNumber) * Number(secondNumber))
alert(Number(firstNumber) / Number(secondNumber))
alert(Number(firstNumber) % Number(secondNumber)) */
const parOuImpar= prompt("Insira um número para saber se ele e par ou impar")
const operacaoParOuImpar = Number(parOuImpar) % 2
if (operacaoParOuImpar == 0) {
  alert('É um número par')
} else {
  alert('É um número ímpar')
}

// const whatTypeOf = prompt('Insira algo para saber o tipo de dado')
// alert(typeof(whatTypeOf))

/* const isString = 34
if (typeof(isString) == 'string') {
  alert('E uma string')
} else {
  alert('Não e uma string')
} */
/* const booleanOrNo = true
if (typeof(booleanOrNo) == 'boolean') {
  alert('E um booleano')
} else {
  alert('Não e um booleano')
} */

