// Estrutura condicionais
const a = 2

// if
// if (a > 8) {
//     return console.log('O número é maior que 8!')
// } else {
//     return console.log('O numero é menor que 8!')
// }

const time = 'Vasco'

// else if
// if (time === 'Palmeiras') {
//     console.log('O seu time é Palmeiras')
// } else if (time === 'São Paulo') {
//     console.log('O seu time é São Paulo')
// } else if (time === 'Vasco') {
//     console.log('O seu time é Vasco')
// } else {
//     console.log('Não encontramos seu time no nosso banco de dados!')
// }

const age = 16

// ternário
// let ofGreater = age >= 18 ? console.log('você é de maior') : console.log('você é de menor')

// expressão com AND(e)
// let onlyGreater = age >= 18 && console.log('mostra site')

// exercicio if
// abaixo de 4 = reprovado
// se a pessoa tirou 4 a 5 = recuperação
// 6 a 9 = aprovado
// 10 = excelente  

const nota = 10

// if (nota === 10) {
//     return console.log('Você é como a uni9, sempre 10!')
// } else if (nota >= 6 && nota <= 9) {
//     return console.log('Você está aprovado!')
// } else if (nota >= 4 && nota <= 5) {
//     return console.log('Você está de recuperação, estude!')
// } else {
//     return console.log('Como diz Raul Seixas, tente outra vez!')
// }

//switch case
const fruit = 'Morango'
switch(fruit) {
    case 'Laranja': return console.log('Vc é de boas');
    case 'Morango': return console.log('Vc é de romantico');
    default: return console.log('Não temos o significado dessa fruta')
}