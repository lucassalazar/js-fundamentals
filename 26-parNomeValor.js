// par (chave/nome)/valor
const saudacao = 'Opa' // Contexto léxico 1 (contexto onde o par chave/valor foi definido)
                       // Contexto global
function exec() {
  const saudacao = 'Falaaa' // Contexto léxico 2
                            // Contexto da função
  return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua Muito Legal',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)