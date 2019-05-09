// A tradução de hoisting seria içamento/elevação
// Pelo fato de variaveis do tipo var não possuírem escopo de bloco
// Esse efeito é presente no Javascript

// "Hoisting is a Javascript's default behavior of moving declarations to the top"

console.log('a =', a)
var a = 2
console.log('a =', a)

// Nota-se que o interpretador declara a variável antecipadamente
// Porém a especifica como undefined

// O mesmo ocorre dentro de uma função 
function hoisting () {
  console.log('a =', a)
  var a = 2
  console.log('a =', a)
}

hoisting()

/* O efeito de içamento quando se utiliza let não ocorre...
 * 
 * console.log('b =', b)
 * let b = 2
 * console.log('b =', b)
 * 
 * ReferenceError: b is not defined
 */

