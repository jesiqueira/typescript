type Idade = number
type Pessoa = {
  nome: string
  idade: Idade
  corPreferida?: string
}

type CorRgb = 'Vermelho' | 'Verde' | 'Azul'
type CorCmyk = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type corPreferida = CorRgb | CorCmyk

const pessoa1: Pessoa = {
  nome: 'Lucas',
  idade: 25,
  corPreferida: 'Vermelho',
}

function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor }
}

console.log(setCorPreferida(pessoa1, 'Ciano'))
