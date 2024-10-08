// estrutura condicionais
// const a = 10 

// if
// if (a > 8) {
//    return console.log('o número é maior que 8!')
// } else {
//    return console.log('o número é menor que 8!')
//}

// const time = 'vasco'

// // else if
// if (time === 'palmeiras') {
//     console.log('o seu time é palmeiras')
// } else if (time === 'são paulo') {
//     console.log('o seu time é são paulo')
// } else if (time === 'vasco') {
//     console.log('o seu time é vasco')
// } else {
//     console.log('não encontramos seu time no nosso banco de dados!')
// }


// const age = 20

// // ternário
// let ofGreater = age >= 18 ? console.log('você é de maior!') : console.log('você é de menor!')

// // expressão com AND(e)
// let onlyGreater = age >= 18 && console.log('mostra site')

// exercicio if 
// abaixo de 4 = reprovado
// se a pessoa tirou 4 a 5 = recuperação
// 6 a 9 = aprovado
// 10 = excelente

// const a = 10

// if (a < 4) {
//     console.log('você foi reprovado!')
// } else if (a <= 5) {
//     console.log('você está de recuperação!')
// } else if (a <= 9) {
//     console.log('você foi aprovado!')
// } else {
//     console.log('você foi excelente!')
// }


// // switch case
// const fruit = 'laranja'
// switch(fruit){
//     case 'laranja': return console.log('você é de boas!');
//     case 'morango': return console.log('você é romântico!');
//     default: return console.log('não temos o siginificado dessa fruta!')
// }

const nota = '3'
switch(nota) {
    case (nota < 4): return console.log('reprovado!');
    case (nota >= 4 && nota <= 5): return console.log('recuperação!');
    case (nota >= 4 && nota <= 9): return console.log('aprovado!');
    default: return console.log('excelente!')
}