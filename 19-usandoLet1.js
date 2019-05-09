// Utilizando o var existem apenas dois escopos (Global/Window e Função)
// Utilizando o let existem três escopos (Global/Window, Função e Bloco)
var numero = 1 // Tanto com var ou let o resultado seria o mesmo
{
  let numero = 2
  console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)