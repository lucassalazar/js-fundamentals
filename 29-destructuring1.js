// Recurso introduzido no ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

const { nome, idade } = pessoa // Tira de dentro do objeto pessoa os atributos nome e idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // Tira os atribuitos e cria variaveis para estes
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// const { conta: { ag, num } } = pessoa // Se o caminho não existe, não funcionará...
