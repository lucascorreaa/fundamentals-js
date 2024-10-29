// loop 
// for (i = 0; i <= 5; i = i + 1) {
//     console.log(i)
// }

// operador de adicao - incremento
// let int = 1
// incremento pós
// (int++) = int + 1  
// console.log(int++, 'pós')
// incremento pré
// console.log(++int, 'pré')


// operador de subtração - decremento
// let dec = 10
// // incremento pós
// // dec = dec + 1 (dec--)
// console.log(dec--, 'pós')
// // incremento pré
// console.log(--dec, 'pré')

// for (i = 1; i <= 20; i++) {
//     if(i % 2 === 0) {
//         console.log(i,'é par!')
//     } else {
//         console.log(i,'é impar!')
//     }  
// }
// let object = {
//     name: 'maria',
//     age: 40
// }

// array 
const products = [{
    name: 'camiseta',
    price: 25
}, {
    name: 'calça',
    price: 60
}, {
    name:'chapéu',
    price: 15
}]

// // percorre todos os obj do array 
// for (let product of products) {
//     console.log(product.name + ' custa ' + product.price + ' reais')
// }

let total = 0
// soma os produtos e para
for (let product of products) {
    // total = total + product.price
    total += product.price
}
    console.log('o valor total dos produtos é: ' + total + ' reais')