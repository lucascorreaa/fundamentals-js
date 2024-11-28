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
    if (fullName.length <= 0){
        return console.error('coloque um nome válido!')
    }
    let name = fullName.split(' ')[0]
    
    return `olá, ${name}, seja bem vindo!`
}
console.log(FirstName('João Pedro Cavanhas Colombo'))

function GetImc (peso, altura) {
    let imc = peso / (altura * altura)
    if(imc <= 18.5){
        console.log(`Imc ${imc} classificação: abaixo do peso`)
    } else if(imc > 18.5 && imc < 24.99){
        console.log(`Imc ${imc} classificação: peso ideal`)
    } else if(imc > 25 && imc < 29.99){
        console.log(`Imc ${imc} classificação: acima do peso`)
    } else {
        console.log(`Imc ${imc} classificação: obeso`)
    }
} 
console.log(GetImc(90, 1.80))