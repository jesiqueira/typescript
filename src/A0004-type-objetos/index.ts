const objetoA: {
  chaveA: string
  readonly chaveB: string // readonly significa que não pode ser alterado
} = {
  chaveA: 'valorA',
  chaveB: 'valorB',
}

objetoA.chaveA = 'novo valor A'

console.log(objetoA)
