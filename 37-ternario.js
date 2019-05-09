// Operador ternário -> nota >= 7 ? 'Aprovado' : 'Reprovado'
// Se nota for maior que 7 retorna Aprovado, caso contrário Reprovado

// FUNÇÃO ANÔNIMA
const resultado1 = function (nota){
  return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado1(7.1))
console.log(resultado1(6.7))

// FUNÇÃO ARROW COM CORPO
const resultado2 = nota => {
  return nota >= 7 ? 'Aprovado' : 'Reprovado'
} 

console.log(resultado2(7.1))
console.log(resultado2(6.7))

// FUNÇÃO ARROW C/ RETORNO IMPLÍCITO
const resultado3 = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado3(7.1))
console.log(resultado3(6.7))

