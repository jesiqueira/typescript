let x
if (typeof x === 'undefined') {
  x = 1
}
console.log(x) // 1

function createPerson(firstName: string, lastName?: string): { firstName: string; lastName?: string } {
  return {
    firstName,
    lastName,
  }
}

function squareOf(x: any) {
  if (typeof x === 'number') {
    return x * x
  }
  return null
}

const squeareOfTwoNumber = squareOf(2)

if (squeareOfTwoNumber === null) {
  console.log('squeareOfTwoNumber is null')
} else {
  console.log(squeareOfTwoNumber * 100)
}
