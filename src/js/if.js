// const age = 17

// if(age >= 18 && age <= 60) {
//     return console.log('Você é pode beber!')
// } else if (age === 17) {
//     return console.log('Falta apenas um ano para você beber!')
// } else {
//     return console.error('Você não pode beber!')
// }

// atividade: crie uma condição de boletim de nota, onde:

// nota 10 = passou por excelencia
// nota 9 a 7 = passou
// nota 4 a 6 = recuperação
// nota 3 para baixo = reprovado

const nota = -1

if(nota === 10) {
    return console.log('passou por excelencia!')
} else if (nota <=9 && nota >= 7) {
    return console.log('passou')
} else if (nota >= 4 && nota <= 6) {
    return console.log('recuperação') 
} else if (nota >= 0 && nota <= 3){
    return console.log('reprovado')
} else {
    return console.error('nota invalida')
}