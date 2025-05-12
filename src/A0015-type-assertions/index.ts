/*Recomendado*/
// condicional
const body = document.querySelector('body')
if (body) body.style.background = 'red'

//type assertion
const body2 = document.querySelector('body') as HTMLBodyElement
body2.style.background = 'red'

//HTML elements
const input = document.querySelector('input') as HTMLInputElement
input.value = 'Hola mundo'
input.focus()
