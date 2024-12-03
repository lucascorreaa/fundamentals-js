// fetch('https://viacep.com.br/ws/01001000/json/')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => console.error('Erro:', error));

function getCEP(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    // informações da API, exemplo: status, headers
    .then((res) => res.json())
    // retorna os dados, o que eu solicitei
    .then((data) => console.log(data))
    // retorna o erro
    .catch((error) => console.error("Error:", error));
}
// getCEP('04935090')

function getPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
      const { name, sprites, weight } = data;
      const div = document.getElementById('pokemon-info')

      div.innerHTML = `
            <h2>${name}</h2>
            <img src="${sprites.front_default}" alt="">
            <p>${weight}</p>
      `
    })
    .catch((error) => console.error("O erro é:", error));
}
getPokemon('pikachu');



//    const obj = {
//     name: 'Maria',
//     age: 20
//    }

//    obj.age

//    const { age, name } = obj
