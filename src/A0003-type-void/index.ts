function semRetorno(...args: string[]): void {
  console.log(args.join(' '))
}

const pessoa = {
  nome: 'Lucas',
  idade: 30,
  profissao: 'Desenvolvedor',

  exibirInfo(): void {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}`)
  }
}

semRetorno('Olá', 'Mundo!')

pessoa.exibirInfo()
