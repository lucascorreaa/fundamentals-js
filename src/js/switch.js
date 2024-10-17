// const age = 17

// switch(true) {

//     case age >= 18 && age <= 60:
//         console.log('Você pode beber!')
//         break

//     case age === 17:
//         console.log('Calma, falta apenas um ano!')

//     default:
//         console.log('Você não pode beber!')
// }


const nota = 10
switch(true) {
    case (nota <= 4):
        console.log('reprovado!')
        break

    case (nota >= 4 && nota <= 6):
        console.log('recuperação!')
        break
    case (nota >= 7 && nota <= 9): 
        console.log('aprovado!')
        break

    default: return console.log('excelente!')
}