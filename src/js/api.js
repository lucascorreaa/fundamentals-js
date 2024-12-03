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


function getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}
