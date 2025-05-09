enum Cores{
    VERMELHO = 10,
    AZUL = 100,
    AMARELO = 200
}

console.log(Cores.VERMELHO); // 10
console.log(Cores.AZUL); // 100
console.log(Cores.AMARELO); // 200
console.log(Cores[10]); // VERMELHO
console.log(Cores[100]); // AZUL
console.log(Cores[200]); // AMARELO
// console.log(Cores[0]); // undefined
