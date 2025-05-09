// Array<T> - T[]
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, curr) => acc * curr, 1)
}

function concatenaStrings(...args: string[]): string {
  return args.reduce((acc, curr) => acc + curr, '')
}

function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase())
}


const result = multiplicaArgs(1, 2, 3, 4, 5)
const concatena = concatenaStrings('Olá', ' ', 'Mundo', '!')
const upper = toUpperCase('Olá', ' ', 'Mundo', '!')
console.log(result) // 120
console.log(concatena) // Olá Mundo!
console.log(upper) // [ 'OLÁ', ' ', 'MUNDO', '!' ]

