console.log('01)', '1' == 1)  // == comparação valor
console.log('02)', '1' === 1) // === comparação valor e tipo
console.log('03)', '3' != 3)  // 3 é diferente de 3? falso
console.log('04)', '3' !== 3) // comparação extrita
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // Data de referência 1 Jan 1970
const d2 = new Date(0)
console.log('09)', d1 === d2) // Compara dois endereços de memória diferentes
console.log('10)', d1 == d2)  // Compara dois endereços de memória diferentes
console.log('11)', d1.getTime() === d2.getTime())
console.log('11)', d1.getTime() == d2.getTime())

console.log('12)', undefined == null)
console.log('12)', undefined === null)
