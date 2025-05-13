class PessoaAtual {
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


class Aluno extends PessoaAtual {}
class Cliente extends PessoaAtual {}


const aluno = new Aluno('Lucas', 20, 'Silva', '123.456.789-00')
const cliente = new Cliente('Maria', 30, 'Oliveira', '987.654.321-00')

console.log(aluno.getNomeCompleto());
