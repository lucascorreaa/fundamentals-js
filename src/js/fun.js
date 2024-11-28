const fullName = 'Lucas do Espirito Santo'
// metodo length
console.log(fullName.length, 'conta caracteres')
// metodo length
const fruits = ['maça', 'pessego', 'uva', 'pera']
console.table(fruits)
console.log(fruits.length, 'array')
console.log(fruits[fruits.length -1])

const cortaNome = fullName.slice(1, 5)
console.log(cortaNome)

const transformToArray = fullName.split(' ')
console.log(transformToArray)

const lastName = transformToArray[transformToArray.length -1]
console.log(lastName)

// funcao que pegue o primeiro nome e da ola
function FirstName(fullName) {
    if (fullName.length <= 0) {
        return console.error('Coloque um nome valido')
    }

    let name = fullName.split(' ')[0]
    return `Olá, ${name}, seja bem vindo!`
}
console.log(FirstName('Mauricio de Souza'))

function getIMC(peso, altura) {
    let imc = peso / (altura * altura)
    switch(imc){
        case imc < 18.5: console.log(`Imc ${imc} Classificação: Abaixo do peso`)
        case imc < 24.99: console.log(`Imc ${imc} Classificação: Peso normal`)
        case imc < 29.99: console.log(`Imc ${imc} Classificação: Acima do peso`)
        case imc > 29.99: console.log(`Imc ${imc} Classificação: Obesidade`)
        default: console.log("ME SEGUE NO GIT PedrooSilvaa")
    }
}

getIMC(90, 1.81)

    