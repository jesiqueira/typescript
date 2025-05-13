class Pessoa3 {
  constructor(
    public nome: string,
    private idade: number,
    public sobreNome: string,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade
  }

  getCpf(): string {
    return this.cpf
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobreNome}`
  }
}

class Aluno1 extends Pessoa3 {
  constructor(
    nome: string,
    idade: number,
    sobrenome: string,
    cpf: string,
    public sala: string,
  ) {
    super(nome, idade, sobrenome, cpf)
  }

  getNomeCompleto(): string {
    console.log('Chamando o método getNomeCompleto da classe Aluno1')
    return `${this.nome} ${this.sobreNome} - Aluno`
  }
}
class Cliente1 extends Pessoa3 {}

const al = new Aluno1('Lucas', 20, 'Silva', '123.456.789-00', 'A1')
const cli = new Cliente1('Maria', 30, 'Oliveira', '987.654.321-00')

console.log(al)
console.log(al.getNomeCompleto())
