// loop 
// for (i = 0; i <= 5; i++) {
//     console.log(i)
// }


// Operador de Adição - Incremento
// let int = 1
// Incremento Pós
// int = int + 1 (int++)
// console.log(int++, 'pós')
// Incremento Pré
// console.log(++int, 'pré')

// Operador de Subtração - Decremento
// let dec = 10
// Incremento Pós
// dec = dec + 1 (dec--)
// console.log(dec--, 'pós')
// Incremento Pré
// console.log(--dec, 'pré')

// for (i = 1; i <= 20; i++) {
//     if(i % 2 === 0) {
//         console.log(i, 'é par!')
//     } else {
//         console.log(i, 'é ímpar')
//     }
// }

const products = [{
    name: 'Camiseta',
    price: 25
}, {
    name: 'Calça',
    price: 60
}, {
    name: 'Chápeu',
    price: 15
}, {
    name: 'Marrom',
    price: 50
}]

// percorre todos os obj do array
// for (let product of products) {
//     console.log(product.name + ' custa ' + product.price + ' reais')
// }

let total = 0
// soma todos os produtos e para
for(let product of products) {
    // total = total + product.price
    total += product.price
}
console.log('A soma total dos produtos é: ' + total + ' reais')
