let x = 10

const pessoa = {
  nome: 'Lucas' as const,
  idade: 23,
  profissao: 'Programador',
}

function escolherCor(cor: 'vermelho' | 'azul' | 'verde'): string {
  return cor
}
 console.log(escolherCor('azul'))

// Module mode - Só para não dar erro ao declarar a variável x
export default 1
