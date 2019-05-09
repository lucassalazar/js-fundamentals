// Um objeto é uma coleção de pares chave e valor
const prod1 = {}
prod1.nome = 'Celular Ultra Mega' // Ex: nome é um identificador, porém utiliza-se a definição chave pois cada identificador deve ser único 
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2
    }
  }
}

'{ "nome": "Camisa Polo", "preco": 79.90 }' // JSON válido != objeto

console.log(prod2)