//Tuple
const dadosCliente1: readonly [number, string, string] = [1, 'Lucas', 'Rua 1']
const dadosCliente2: [number, string, string] = [2, 'João', 'Rua 2']
const dadosCliente3: [number, string, string?] = [2, 'João']
const dadosCliente4: [number, string, ...string[]] = [2, 'João', 'Rua 2', 'Rua 3']

console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)
console.log(dadosCliente4)

// readonly array
const array1: readonly number[] = [1, 2, 3, 4, 5]
const array2: ReadonlyArray<number> = [1, 2, 3, 4, 5]
console.log(array1)
console.log(array2)
