let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)
console.log(!!isAtivo) // Duas negações, verifica se o number é verdadeiro
console.log(!isAtivo)  // Negação, inverte estado de verdadeiro do number

if (!!isAtivo){        // Printa isAtivo caso este seja verdadeiro
    console.log(isAtivo)
} else if(!isAtivo){   // Printa 2 caso isAtivo seja falso
    console.log(2)
}

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || 'texto')) // Retorna true, se algum dos valores for verdadeiro
console.log('' || null || 0 || 'texto' || 123) // Retorna o primeiro valor verdadeiro

// Exemplo

let nome = ''
console.log(nome || 'Desconhecido')