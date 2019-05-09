// Fuja do escopo global, principalmente quando trabalhando com front-end
var numero = 1
{
  var numero = 2
  console.log('Dentro =', numero)
}
console.log('Fora =', numero)
