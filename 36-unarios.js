let num1 = 1
let num2 = 2

num1++ // posfix
console.log(num1)

--num1 // prefix
console.log(num1)

console.log(++num1 === num2--) // Na ordem de prioridade o decremento de num2 acontece após a comparação
console.log(num1 === num2)

let num3 = 1
console.log(num3++, num3, ++num3)