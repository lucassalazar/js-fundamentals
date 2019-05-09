/*
 * OPERADORES BINÁRIOS
 * v e v -> v
 * v e f -> f
 * v e v -> v
 * f e ? -> f
 * 
 * v ou v -> v
 * v ou f -> v
 * f ou v -> v
 * f ou f -> f
 * 
 * v xor v -> f
 * v xor f -> v
 * f xor v -> v
 * f xor f -> f
 * 
 * OPERADORES UNÁRIOS
 * !v -> f
 * !f -> v
 */

function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2
  const comprarTv50 = trabalho1 && trabalho2    // Operador curto-circuito, se o primeiro for falso nem olha o próximo
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor - JS não tem operador xor, tem apenas para bit a bit por isso é necessário converter para booleano !!()
  const comprarTv32 = trabalho1 != trabalho2
  const manterSaudavel = !comprarSorvete // Operadorador unário
  // Recurso novo ES2015, criação de objeto inteligente chave/valor igual implicita
  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))