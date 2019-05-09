// Função é um bloco de código que pode ser invocado dentro de um programa

// Função sem retorno
function imprimirSoma(a, b){
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Passando apenas um valor, o segundo é undefined = NaN
imprimirSoma(2, 10, 4, 5, 6) // Passa apenas os dois primeiros valores e ignora os demais
imprimirSoma() // Passando nenhum valor, a e b se tornam undefined = NaN

// Função com retorno
function soma(a, b = 1){ // b = 0 é um valor padrão no caso de não ser passado nenhum parâmetro para b
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())