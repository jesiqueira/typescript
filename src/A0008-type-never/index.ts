function criarErro(mensagem: string): never {
  throw new Error(mensagem);
}
criarErro('Um erro ocorreu!');
