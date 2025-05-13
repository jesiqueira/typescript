class Pessoa5 {
  static idadePadrao = 0
  static cpfPadrao = '000.000.000-00'

  constructor(
    public nome: string,
    private idade: number,
    public sobreNome: string,
    protected cpf: string,
  ) {}

  static falarOi(): void {
    console.log('Oi')
  }
  metodoNormal(): void {
    console.log(Pessoa5.idadePadrao, Pessoa5.cpfPadrao)
  }

  static criarPessoa(nome: string, idade: number, sobrenome: string, cpf: string): Pessoa5 {
    return new Pessoa5(nome, idade, sobrenome, cpf)
  }
  get NomeCompleto(): string {
    console.log('Chamando o método getNomeCompleto da classe Pessoa5')
    return `${this.nome} ${this.sobreNome}`
  }
  set NomeCompleto(nome: string) {
    console.log('Chamando o método setNomeCompleto da classe Pessoa5')
    const partes = nome.split(' ')
    this.nome = partes[0]
    this.sobreNome = partes.slice(1).join(' ')
  }
}

class Aluno3 extends Pessoa5 {
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
    console.log('Chamando o método getNomeCompleto da classe Aluno3')
    return `${this.nome} ${this.sobreNome} - Aluno`
  }
}

const al2 = new Aluno3('Lucas', 20, 'Silva', '123.456.789-00', 'A1')
const pessoa5 = Pessoa5.criarPessoa('Lucas', 20, 'Silva', '123.456.789-00')
console.log(pessoa5)
console.log(pessoa5.NomeCompleto)
pessoa5.NomeCompleto = 'Lucas Silva Santos'
console.log(pessoa5.NomeCompleto)
pessoa5.metodoNormal()

console.log(al2)
console.log(al2.NomeCompleto)
Aluno3.falarOi() // Chama o método estático da classe Pessoa5
