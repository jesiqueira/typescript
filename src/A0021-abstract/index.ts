abstract class Personagem {
  protected abstract emoji: string

  constructor(
    protected nome: string,
    protected vida: number,
    protected ataque: number,
  ) {}

  public atacar(inimigo: Personagem): void {
    this.bordao()
    inimigo.receberDano(this.ataque)
  }
  public receberDano(dano: number): void {
    this.vida -= dano
    console.log(`${this.nome} recebeu ${dano} de dano!`)
    if (this.vida <= 0) {
      console.log(`${this.nome} foi derrotado!`)
    }
  }

  abstract bordao(): void
}

class Guerreiro extends Personagem {
  protected emoji = '⚔️'

  bordao(): void {
    console.log(`${this.emoji} - ${this.nome} grita: "Eu sou o mais forte!"`)
  }
}

class Mostro extends Personagem {
  protected emoji = '👹'
  bordao(): void {
    console.log(`${this.emoji} - ${this.nome} ruge: "Você não escapará da minha fúria!"`)
  }
}
const guerreiro = new Guerreiro('Guerreiro', 100, 20)
const mostro = new Mostro('Mostro', 50, 10)
guerreiro.atacar(mostro)
mostro.atacar(guerreiro)
