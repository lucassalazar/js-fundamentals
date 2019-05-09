const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Retorna null
console.log(escola.charCodeAt(3)) // Transforma em unicode
console.log(escola.indexOf('3')) // Retorna o indíce do caractere 3

console.log(escola.substring(1)) // Retorna o string a partir da posição 1
console.log(escola.substring(0, 3)) //Retorna os caracteres do índice 0 até o indice 3, sem incluir o 3

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
/*
 * Literal é o proprio valor de forma direta
 * sem o mesmo estar vinculado a uma variavel
 * (Ex: 10, 'Hello World!, "1010")
 */
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))
console.log(escola.replace(/\w/g, 'e'))
/*
 * Expressões Regulares
 * /\d/ = dígitos
 * /\w/ = caractéres alfanuméricos
 */
console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/)) // Regexp literal
console.log('nay, an apple is on the tree'.split (/.n/)) // A Regexp /.n/ neste caso retira a 
                                                         // junção de qualquer caractere juntamente com o caractere n
let msg = '-26.916128, -48.668748'
let lat = msg.split(',')[1]
console.log(parseFloat(lat, 10))