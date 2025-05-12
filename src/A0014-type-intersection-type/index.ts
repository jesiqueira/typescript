type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemIdade = { idade: number }
type Pessoa1 = TemNome & TemSobrenome & TemIdade

const p: Pessoa1 = {
  nome: 'Luis',
  sobrenome: 'Silva',
  idade: 30,
}
console.log(p)
