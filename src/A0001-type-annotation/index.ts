/*eslint-disable*/
// tipos basicos
let nome: string = 'Lucas'
let idade: number = 25 // number pode ser inteiro ou decimal
let ativo: boolean = true
let simbolo: symbol = Symbol('simbolo')
let nulo: null = null
let indefinido: undefined = undefined
let qualquer: any = 'pode ser qualquer coisa'
// let big: bigint = 1234567890123456789012345678901234567890n
// Arrays
let habilidades: Array<string> = ['JavaScript', 'TypeScript', 'React']
let habilidades2: string[] = ['JavaScript', 'TypeScript', 'React']
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5]

let objeto: {
  nome: string
  idade: number
  ativo: true
  adulto?: boolean
} = {
  nome: 'Lucas',
  idade: 25,
  ativo: true,
}

// Funções
function soma(x: number, y: number): number {
  return x + y
}

const soma2: (x: number, y: number) => number = (x, y) => {
  return x + y
}
