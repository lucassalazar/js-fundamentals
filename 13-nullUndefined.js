const a = {name: 'Teste'} // O objeto não está contido na constante a. A constante a possuí o valor do endereço de memória que contém o objeto.

console.log(a)

// Atribuição por referência (atribui a variável um endereço de memória) Refêrencia = Endereço na memória
const b = a // b contém o endereço da memória que contém o objeto

console.log(b) 

b.name = 'Opa'

console.log(a)

// Atribuição por valor, copia o valor de uma variável à outra

let c = 3 // Neste caso a atribuição é por valor, visto que 3 é um valor primitivo

let d = c // d recebe um valor primitivo, não um endereço de memória

d++

console.log(d)
console.log(c)

/*---------------------------------------------------------------*/
let valor // Não foi inicializada
console.log(valor)
// console.log(valor2) não foi definido, ou declarado

valor = null // Ausência de valor
console.log(valor) //Foi inicializada, mas não contém nenhum valor ou endereço de memória

// Quando o programador quiser "zerar" uma variável que possuí um valor ou endereço de memória deve-se usar null
// Não se deve usar undefined neste caso, o undefined é uma característica da linguagem para dizer que uma variável não foi inicializada

// console.log(valor.toString()) -- TypeError: Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar atribuir undefined, deixar isso para a própria linguagem utilizar como forma de sinalização na presença de uma variável não definida
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)


produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)