// fetch('https://viacep.com.br/ws/01001000/json/')
//     .then(Response => {
//         return Response.json();
//     })
//     .then(data => {
//         return console.log(data);
//     })
//     .catch(Error => console.error('erro:', Error));

// function getCEP(cep) {
//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//     .then(res => res.json()) // informações da API, exemplo: status, headers
//     .then(data => console.log(data)) // retorna os dados, o que eu solicitei
//     .catch(error => console.error('error:', error)) // retorna o erro
// }

// getCEP('05763450')


function getPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((res) => res.json())
        .then((data) => {
            const {name, sprites, weight} = data;
            const div = document.getElementById('pokemon-info')

            div.innerHTML = `
                <h2>${name}</h2>
                <img src="${sprites.front_default}" alt="">
                <p>${weight}</p>
            `
})
        .catch(error => console.error('error:', error))
}
getPokemon('mewtwo')






// function getProducts(products) {
//     fetch(`https://fakestoreapi.com/${products}`)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(error => console.error('erro:', error))
// }

// getProducts('')