// const age = 17

// switch(true) {
//     case age >= 18 && age <= 60:
//         console.log('Você é pode beber!') 
//         break
//     case age === 17: 
//         console.log('Calma, falta apenas um ano!')
//         break
//     default:
//         console.log('Você não pode beber!')
// }

const nota = 10

switch(true) {
    case nota === 10:
        console.log('passou com excelencia')
        break
    case nota <= 9 && nota >= 7:
        console.log('passou')
        break
    case nota >= 4 && nota <= 6:
        console.log('recuperação')
        break
    case nota >= 0 && nota <=3:
        console.log('tente outra vez, reprova baixo. nengue') 
        break
    default:
        console.log('coloca uma nota valida')
}
