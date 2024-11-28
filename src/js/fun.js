const fullName = 'joao pedro cavanhas colombo'
// metodo lenght
console.log(fullName.length, 'conta carectere')
// metodo lenght
const fruits = ['maçã', 'pessego', 'uva', 'pera']
console.log(fruits.length, 'array')
console.table(fruits)
console.log(fruits[fruits.length -1])

const cortaNome = fullName.slice(1, 5)
console.log(cortaNome)

const transformToArray = fullName.split(' ')
console.log(transformToArray)

const lastName = transformToArray[transformToArray.length -1]
console.log(lastName)


// função que pegue o primeiro nome e da olá
function FirstName(fullName) {
    let name = fullName.split(' ')[0]
    
    return `olá, ${name}, seja bem vindo!`
}
console.log(FirstName('Mauricio de Souza'))
