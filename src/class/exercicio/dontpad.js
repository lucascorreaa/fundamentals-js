// 1 a 10
for (i = 0; i <= 10; i = i + 1) {
        console.log(i)
}

// num par de 1 a 20
for (i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(i,'par!')
}}

// soma de 1 a 100
let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}

console.log(soma);

//  Imprimir os elementos de um array
const frutas = ["maçã", "banana", "laranja", "uva", "manga"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Multiplicar os números de 1 a 10 por 2
for (let i = 1; i <= 10; i++) {
    console.log(i * 2);
  }

// (contagem regressiva)
for (let i = 10; i >= 1; i--) {
    console.log(i);
  }

// maior número em um array
const numeros = [100, 5, 8, 20, 3, 15];
let maior = numeros[0]; 
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}
console.log(maior);

// números ímpares entre 1 e 50
let contadorImpares = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    contadorImpares++;
  }
}
console.log(contadorImpares);

// tabuada
const numero = 10; 
for (let i = 1; i <= 10; i++) {
  console.log(numero * i);
}

//  Reverter uma string
const str = "joao cavanhas";
let invertida = "";

for (let i = str.length - 1; i >= 0; i--) {
  invertida += str[i];
}

console.log(invertida);
