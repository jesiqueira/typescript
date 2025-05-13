class Pessoa4 {
  constructor(
    public nome: string,
    private idade: number,
    public sobreNome: string,
    protected cpf: string,
  ) {}

  get Idade(): number {
    return this.idade
  }

  get Cpf(): string {
    return this.cpf
  }
  set Cpf(cpf: string){
    this.cpf = cpf
  }

  get NomeCompleto(): string {
    return `${this.nome} ${this.sobreNome}`
  }
}

class Aluno2 extends Pessoa4 {
  constructor(
    nome: string,
    idade: number,
    sobrenome: string,
    cpf: string,
    public sala: string,
  ) {
    super(nome, idade, sobrenome, cpf)
  }

  get NomeCompleto(): string {
    console.log('Chamando o método getNomeCompleto da classe Aluno2')
    return `${this.nome} ${this.sobreNome} - Aluno`
  }
}
class Cliente2 extends Pessoa4 {}

const al1 = new Aluno2('Lucas', 20, 'Silva', '123.456.789-00', 'A1')
const cli1 = new Cliente2('Maria', 30, 'Oliveira', '987.654.321-00')
al1.Cpf = '111.222.333-44'

console.log(al1)
console.log(al1.NomeCompleto)
