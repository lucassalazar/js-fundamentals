let a = 3 // Variaveis decalaradas com const ou var não irão para o objeto global

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(this.a)
console.log(global.b) // Global equivalente a window
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports)

// Criando uma variavel maluca: sem var e let!
abc = 3 // não fazer isso
console.log(global.abc)
console.log(global === module.exports)
console.log(global === this)
console.log(module.exports === this)

// module.exports = {e: 456, f: false, g: 'teste'}

// Saída: 3, undefined, 123, 456, 456, {c: 456, d: false, e: 'teste'}, 3, false, false, true
